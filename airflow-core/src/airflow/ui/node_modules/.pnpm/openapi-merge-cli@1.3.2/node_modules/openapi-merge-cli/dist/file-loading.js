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
exports.readYamlOrJSON = exports.readFileAsString = exports.JsonOrYamlParseError = void 0;
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
class JsonOrYamlParseError extends Error {
    constructor(jsonError, yamlError) {
        super(`Failed to parse the input as either JSON or YAML.\n\nJSON Error: ${jsonError.message}\n\nYAML Error: ${yamlError.message}`);
    }
}
exports.JsonOrYamlParseError = JsonOrYamlParseError;
function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(filePath, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
function readFileAsString(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield readFilePromise(filePath)).toString('utf-8');
    });
}
exports.readFileAsString = readFileAsString;
function readYamlOrJSON(fileContents) {
    return __awaiter(this, void 0, void 0, function* () {
        let jsonError;
        try {
            return JSON.parse(fileContents);
        }
        catch (e) {
            jsonError = e;
        }
        let yamlError;
        try {
            return js_yaml_1.default.safeLoad(fileContents);
        }
        catch (e) {
            yamlError = e;
        }
        throw new JsonOrYamlParseError(jsonError, yamlError);
    });
}
exports.readYamlOrJSON = readYamlOrJSON;
