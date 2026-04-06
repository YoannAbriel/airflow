/* tslint:disable */
/* eslint-disable */

/**
 * Format SQL by parsing and regenerating it (round-trip)
 */
export function format_sql(dialect: string, sql: string): string;

/**
 * Get a list of all supported dialect names
 */
export function get_supported_dialects(): any;

export function init(): void;

/**
 * Parse SQL and return the AST as a JSON value
 */
export function parse_sql(dialect: string, sql: string): any;

/**
 * Parse SQL and return the AST as a JSON string
 */
export function parse_sql_to_json_string(dialect: string, sql: string): string;

/**
 * Parse SQL and return a string representation of the AST
 */
export function parse_sql_to_string(dialect: string, sql: string): string;

/**
 * Parse SQL with options and return the AST as a JSON value
 */
export function parse_sql_with_options(dialect: string, sql: string, options: any): any;

/**
 * Validate SQL syntax without returning the full AST
 */
export function validate_sql(dialect: string, sql: string): boolean;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly format_sql: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly get_supported_dialects: () => any;
    readonly init: () => void;
    readonly parse_sql: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly parse_sql_to_json_string: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly parse_sql_to_string: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly parse_sql_with_options: (a: number, b: number, c: number, d: number, e: any) => [number, number, number];
    readonly validate_sql: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
