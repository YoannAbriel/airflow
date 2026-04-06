import { sync } from "cross-spawn";
import { IndentationText, NewLineKind, Project, QuoteKind } from "ts-morph";
export const formatOutput = async (outputPath) => {
    const project = new Project({
        skipAddingFilesFromTsConfig: true,
        manipulationSettings: {
            indentationText: IndentationText.TwoSpaces,
            newLineKind: NewLineKind.LineFeed,
            quoteKind: QuoteKind.Double,
            usePrefixAndSuffixTextForRename: false,
            useTrailingCommas: true,
        },
    });
    const sourceFiles = project.addSourceFilesAtPaths(`${outputPath}/**/*`);
    const tasks = sourceFiles.map((sourceFile) => {
        sourceFile.formatText();
        sourceFile.fixMissingImports();
        sourceFile.organizeImports();
        return sourceFile.save();
    });
    await Promise.all(tasks);
};
const formatters = {
    biome: {
        args: (path) => ["format", "--write", path],
        command: "biome",
        name: "Biome (Format)",
    },
    prettier: {
        args: (path) => [
            "--ignore-unknown",
            path,
            "--write",
            "--ignore-path",
            "./.prettierignore",
        ],
        command: "prettier",
        name: "Prettier",
    },
};
/**
 * Map of supported linters
 */
const linters = {
    biome: {
        args: (path) => ["lint", "--write", path],
        command: "biome",
        name: "Biome (Lint)",
    },
    eslint: {
        args: (path) => [path, "--fix"],
        command: "eslint",
        name: "ESLint",
    },
};
export const processOutput = async ({ output, format, lint, }) => {
    if (format) {
        const module = formatters[format];
        console.log(`✨ Running ${module.name} on queries`);
        sync(module.command, module.args(output));
    }
    if (lint) {
        const module = linters[lint];
        console.log(`✨ Running ${module.name} on queries`);
        sync(module.command, module.args(output));
    }
};
