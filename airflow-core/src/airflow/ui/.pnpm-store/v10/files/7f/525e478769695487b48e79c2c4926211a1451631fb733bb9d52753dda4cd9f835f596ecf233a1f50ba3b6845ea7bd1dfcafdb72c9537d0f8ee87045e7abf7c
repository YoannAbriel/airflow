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
exports.loadConfiguration = void 0;
const ajv_1 = __importDefault(require("ajv"));
const configuration_schema_json_1 = __importDefault(require("./configuration.schema.json"));
const file_loading_1 = require("./file-loading");
const process_1 = __importDefault(require("process"));
function validateConfiguration(rawData) {
    return __awaiter(this, void 0, void 0, function* () {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        try {
            const data = yield file_loading_1.readYamlOrJSON(rawData);
            const ajv = new ajv_1.default();
            const validate = ajv.compile(configuration_schema_json_1.default);
            const valid = validate(data);
            if (!valid) {
                return ajv.errorsText(validate.errors);
            }
            return data;
        }
        catch (e) {
            return `Could not parse configuration: ${e}`;
        }
    });
}
const STANDARD_CONFIG_FILE = 'openapi-merge.json';
function loadConfiguration(configLocation) {
    return __awaiter(this, void 0, void 0, function* () {
        const configFile = configLocation === undefined ? STANDARD_CONFIG_FILE : configLocation;
        try {
            const rawData = yield file_loading_1.readFileAsString(configFile);
            return yield validateConfiguration(rawData);
        }
        catch (e) {
            return `Could not find or read '${configFile}' in the current directory: ${process_1.default.cwd()}`;
        }
    });
}
exports.loadConfiguration = loadConfiguration;
