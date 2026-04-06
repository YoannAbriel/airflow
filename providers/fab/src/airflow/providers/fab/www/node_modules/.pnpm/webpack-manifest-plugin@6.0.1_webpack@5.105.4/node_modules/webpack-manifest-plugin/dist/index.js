import { relative, resolve } from 'node:path';
import { SyncHook } from 'tapable';
import { beforeRunHook, emitHook, getCompilerHooks, normalModuleLoaderHook } from './hooks.js';
const emitCountMap = new Map();
const defaults = {
    assetHookStage: Infinity,
    basePath: '',
    fileName: 'manifest.json',
    filter: null,
    generate: void 0,
    map: null,
    publicPath: null,
    removeKeyHash: /([a-f0-9]{16,32}\.?)/gi,
    seed: void 0,
    serialize(manifest) {
        return JSON.stringify(manifest, null, 2);
    },
    sort: null,
    transformExtensions: /^(gz|map)$/i,
    useEntryKeys: false,
    useLegacyEmit: false,
    writeToFileEmit: false
};
class WebpackManifestPlugin {
    options;
    constructor(opts) {
        this.options = Object.assign({}, defaults, opts);
    }
    apply(compiler) {
        const { NormalModule } = compiler.webpack;
        const moduleAssets = {};
        const manifestFileName = resolve(compiler.options.output?.path || './', this.options.fileName);
        const manifestAssetId = relative(compiler.options.output?.path || './', manifestFileName);
        const beforeRun = beforeRunHook.bind(this, { emitCountMap, manifestFileName });
        const emit = emitHook.bind(this, {
            compiler,
            emitCountMap,
            manifestAssetId,
            manifestFileName,
            moduleAssets,
            options: this.options
        });
        const normalModuleLoader = normalModuleLoaderHook.bind(this, { moduleAssets });
        const hookOptions = {
            name: 'WebpackManifestPlugin',
            stage: this.options.assetHookStage
        };
        compiler.hooks.compilation.tap(hookOptions, (compilation) => {
            const hook = !NormalModule.getCompilationHooks
                ? compilation.hooks.normalModuleLoader
                : NormalModule.getCompilationHooks(compilation).loader;
            hook.tap(hookOptions, normalModuleLoader);
        });
        if (this.options.useLegacyEmit === true) {
            compiler.hooks.emit.tap(hookOptions, emit);
        }
        else {
            compiler.hooks.thisCompilation.tap(hookOptions, (compilation) => {
                compilation.hooks.processAssets.tap(hookOptions, () => emit(compilation));
            });
        }
        compiler.hooks.run.tapAsync(hookOptions, beforeRun);
        compiler.hooks.watchRun.tapAsync(hookOptions, beforeRun);
    }
}
export { getCompilerHooks, WebpackManifestPlugin };
//# sourceMappingURL=index.js.map