"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const data_1 = require("./data");
const load_configuration_1 = require("./load-configuration");
const commander_1 = require("commander");
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const pjson = require('../package.json');
const openapi_merge_1 = require("openapi-merge");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const data_2 = require("openapi-merge/dist/data");
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const file_loading_1 = require("./file-loading");
const ERROR_LOADING_CONFIG = 1;
const ERROR_LOADING_INPUTS = 2;
const ERROR_MERGING = 3;
const program = new commander_1.Command();
program.version(pjson.version);
program
    .option('-c, --config <config_file>', 'The path to the configuration file for the merge tool.');
class LogWithMillisDiff {
    constructor() {
        this.prevTime = this.currTime = this.getCurrentTimeMillis();
    }
    log(input) {
        this.currTime = this.getCurrentTimeMillis();
        console.log(`${input} (+${this.currTime - this.prevTime}ms)`);
        this.prevTime = this.currTime;
    }
    getCurrentTimeMillis() {
        return new Date().getTime();
    }
}
function loadOasForInput(basePath, input, inputIndex, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        if (data_1.isConfigurationInputFromFile(input)) {
            const fullPath = path_1.default.join(basePath, input.inputFile);
            logger.log(`## Loading input ${inputIndex}: ${fullPath}`);
            return (yield file_loading_1.readYamlOrJSON(yield file_loading_1.readFileAsString(fullPath)));
        }
        else {
            logger.log(`## Loading input ${inputIndex} from URL: ${input.inputURL}`);
            const inputContents = yield isomorphic_fetch_1.default(input.inputURL).then(rsp => rsp.text());
            return (yield file_loading_1.readYamlOrJSON(inputContents));
        }
    });
}
function isString(s) {
    return typeof s === 'string';
}
function isSingleMergeInput(i) {
    return typeof i !== 'string';
}
function convertInputs(basePath, configInputs, logger) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield Promise.all(configInputs.map((input, inputIndex) => __awaiter(this, void 0, void 0, function* () {
            try {
                const oas = yield loadOasForInput(basePath, input, inputIndex, logger);
                const output = {
                    oas,
                    pathModification: input.pathModification,
                    operationSelection: input.operationSelection,
                    description: input.description,
                };
                if ('dispute' in input) {
                    return Object.assign(Object.assign({}, output), { dispute: input.dispute });
                }
                else if ('disputePrefix' in input) {
                    return Object.assign(Object.assign({}, output), { disputePrefix: input.disputePrefix });
                }
                return output;
            }
            catch (e) {
                return `Input ${inputIndex}: could not load configuration file. ${e}`;
            }
        })));
        const errors = results.filter(isString);
        if (errors.length > 0) {
            return { errors };
        }
        return results.filter(isSingleMergeInput);
    });
}
function isYamlExtension(filePath) {
    const extension = path_1.default.extname(filePath);
    return ['.yaml', '.yml'].includes(extension);
}
function dumpAsYaml(blob) {
    // Note: The JSON stringify and parse is required to strip the undefined values: https://github.com/nodeca/js-yaml/issues/571
    return js_yaml_1.default.safeDump(JSON.parse(JSON.stringify(blob)), { indent: 2 });
}
function writeOutput(outputFullPath, outputSchema) {
    const fileContents = isYamlExtension(outputFullPath)
        ? dumpAsYaml(outputSchema)
        : JSON.stringify(outputSchema, null, 2);
    fs_1.default.writeFileSync(outputFullPath, fileContents);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = new LogWithMillisDiff();
        program.parse(process.argv);
        logger.log(`## ${process.argv[0]}: Running v${pjson.version}`);
        const config = yield load_configuration_1.loadConfiguration(program.config);
        if (typeof config === 'string') {
            console.error(config);
            process.exit(ERROR_LOADING_CONFIG);
            return;
        }
        logger.log(`## Loaded the configuration: ${config.inputs.length} inputs`);
        const basePath = path_1.default.dirname(program.config || './');
        const inputs = yield convertInputs(basePath, config.inputs, logger);
        if ('errors' in inputs) {
            console.error(inputs);
            process.exit(ERROR_LOADING_INPUTS);
            return;
        }
        logger.log(`## Loaded the inputs into memory, merging the results.`);
        const mergeResult = openapi_merge_1.merge(inputs);
        if (data_2.isErrorResult(mergeResult)) {
            console.error(`Error merging files: ${mergeResult.message} (${mergeResult.type})`);
            process.exit(ERROR_MERGING);
            return;
        }
        const outputFullPath = path_1.default.join(basePath, config.output);
        logger.log(`## Inputs merged, writing the results out to '${outputFullPath}'`);
        writeOutput(outputFullPath, mergeResult.output);
        logger.log(`## Finished writing to '${outputFullPath}'`);
    });
}
exports.main = main;
