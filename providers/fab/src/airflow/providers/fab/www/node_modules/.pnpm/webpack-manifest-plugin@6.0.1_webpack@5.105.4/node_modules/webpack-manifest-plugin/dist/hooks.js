import { mkdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { SyncWaterfallHook } from 'tapable';
import webpackSources from 'webpack-sources';
import { generateManifest, reduceAssets, reduceChunk, transformFiles } from './helpers.js';
const { RawSource } = webpackSources;
const compilerHookMap = new WeakMap();
const getCompilerHooks = (compiler) => {
    let hooks = compilerHookMap.get(compiler);
    if (typeof hooks === 'undefined') {
        hooks = {
            afterEmit: new SyncWaterfallHook(['manifest']),
            beforeEmit: new SyncWaterfallHook(['manifest'])
        };
        compilerHookMap.set(compiler, hooks);
    }
    return hooks;
};
const beforeRunHook = ({ emitCountMap, manifestFileName }, _, callback) => {
    const emitCount = emitCountMap.get(manifestFileName) || 0;
    emitCountMap.set(manifestFileName, emitCount + 1);
    if (callback) {
        callback();
    }
};
const emitHook = function emit({ compiler, emitCountMap, manifestAssetId, manifestFileName, moduleAssets, options }, compilation) {
    const emitCount = emitCountMap.get(manifestFileName) - 1;
    const stats = compilation.getStats().toJson({
        all: false,
        assets: true,
        cachedAssets: true,
        ids: true,
        publicPath: true
    });
    const resolvedPublicPath = options.publicPath !== null ? options.publicPath : stats.publicPath;
    const publicPath = resolvedPublicPath === 'auto' ? '' : resolvedPublicPath;
    const { basePath, removeKeyHash } = options;
    emitCountMap.set(manifestFileName, emitCount);
    const auxiliaryFiles = {};
    let files = Array.from(compilation.chunks).reduce((prev, chunk) => reduceChunk(prev, chunk, options, auxiliaryFiles), []);
    files = stats.assets.reduce((prev, asset) => reduceAssets(prev, asset, moduleAssets), files);
    files = files.filter(({ name, path }) => !path.includes('hot-update') &&
        typeof emitCountMap.get(join(compiler.options.output?.path || '<unknown>', name)) ===
            'undefined');
    files.forEach((file) => {
        delete auxiliaryFiles[file.path];
    });
    Object.keys(auxiliaryFiles).forEach((auxiliaryFile) => {
        files = files.concat(auxiliaryFiles[auxiliaryFile]);
    });
    files = files.map((file) => {
        const normalizePath = (path) => {
            if (!path.endsWith('/')) {
                return `${path}/`;
            }
            return path;
        };
        const changes = {
            name: basePath ? normalizePath(basePath) + file.name : file.name,
            path: publicPath ? normalizePath(publicPath) + file.path : file.path
        };
        changes.name = removeKeyHash ? changes.name.replace(removeKeyHash, '') : changes.name;
        return Object.assign(file, changes);
    });
    files = transformFiles(files, options);
    let manifest = generateManifest(compilation, files, options);
    const isLastEmit = emitCount === 0;
    manifest = getCompilerHooks(compiler).beforeEmit.call(manifest);
    if (isLastEmit) {
        const output = options.serialize(manifest);
        compilation.emitAsset(manifestAssetId, new RawSource(output));
        if (options.writeToFileEmit) {
            mkdirSync(dirname(manifestFileName), { recursive: true });
            writeFileSync(manifestFileName, output);
        }
    }
    getCompilerHooks(compiler).afterEmit.call(manifest);
};
const normalModuleLoaderHook = ({ moduleAssets }, context, module) => {
    const loaderContext = context;
    const { emitFile } = loaderContext;
    loaderContext.emitFile = (file, content, sourceMap) => {
        if (module.userRequest && !moduleAssets[file]) {
            Object.assign(moduleAssets, { [file]: join(dirname(file), basename(module.userRequest)) });
        }
        return emitFile.call(module, file, content, sourceMap);
    };
};
export { beforeRunHook, emitHook, getCompilerHooks, normalModuleLoaderHook };
//# sourceMappingURL=hooks.js.map