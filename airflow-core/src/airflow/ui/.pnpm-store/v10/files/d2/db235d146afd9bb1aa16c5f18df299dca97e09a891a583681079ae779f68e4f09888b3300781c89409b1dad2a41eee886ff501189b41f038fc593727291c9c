"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const inputFile = path_1.default.join('src', 'configuration.schema.json');
const schema = JSON.parse(fs_1.default.readFileSync(inputFile).toString());
schema.$id = "https://github.com/robertmassaioli/openapi-merge/blob/main/packages/openapi-merge-cli/src/data.ts";
schema.title = "Configuration";
schema.description = "The Configuration file for the OpenAPI Merge CLI Tool.";
fs_1.default.writeFileSync(inputFile, JSON.stringify(schema, null, 2));
