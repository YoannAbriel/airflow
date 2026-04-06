import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { buildQueriesOutputPath, exists } from "./common.mjs";
async function printGeneratedTS(result, options) {
    const dir = buildQueriesOutputPath(options.output);
    const dirExists = await exists(dir);
    if (!dirExists) {
        await mkdir(dir, { recursive: true });
    }
    await writeFile(path.join(dir, result.name), result.content);
}
export async function print(results, options) {
    const outputPath = options.output;
    const dirExists = await exists(outputPath);
    if (!dirExists) {
        await mkdir(outputPath);
    }
    const promises = results.map(async (result) => {
        await printGeneratedTS(result, options);
    });
    await Promise.all(promises);
}
