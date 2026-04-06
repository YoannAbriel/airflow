import * as webpack from 'webpack';
import { Compiler, Compilation, Chunk } from 'webpack';

interface IPackageLicenseMeta {
    author: string;
    license: string;
    licenseText: string;
    name: string;
    noticeText?: string;
    repository: string;
    source: string;
    version: string;
}

interface IPluginOptions {
    additionalFiles: {
        [filename: string]: (packages: IPackageLicenseMeta[]) => string | Promise<string>;
    };
    licenseOverrides: {
        [packageVersion: string]: string;
    };
    outputFilename: string;
    replenishDefaultLicenseTexts: boolean;
    includeNoticeText: boolean;
    unacceptableLicenseTest: (licenseIdentifier: string) => boolean;
    excludedPackageTest: (packageName: string, packageVersion: string) => boolean;
    includePackages: () => string[] | Promise<string[]>;
}

interface IWebpackPlugin {
    apply: (compiler: webpack.Compiler) => void;
}

declare class WebpackLicensePlugin implements IWebpackPlugin {
    private pluginOptions;
    private readonly filenames;
    private createdFiles;
    private observedCompilers;
    constructor(pluginOptions?: Partial<IPluginOptions>);
    apply(compiler: Compiler): void;
    handleWatchRun(_: unknown, callback: () => void): Promise<void>;
    handleCompilation(compiler: Compiler, compilation: Compilation): void;
    handleChunkAssetOptimization(compiler: Compiler, compilation: Compilation, chunks: Set<Chunk>, callback: () => void): Promise<void>;
}

export { WebpackLicensePlugin as default };
