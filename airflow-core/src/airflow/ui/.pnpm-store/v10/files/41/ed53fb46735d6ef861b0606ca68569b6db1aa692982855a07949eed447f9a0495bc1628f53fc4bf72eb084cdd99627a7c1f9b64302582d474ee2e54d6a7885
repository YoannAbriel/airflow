//#region src/dialects.ts
/**
* Generic SQL dialect - accepts most SQL syntax
*/
var GenericDialect = class {
	constructor() {
		this.name = "generic";
	}
};
/**
* ANSI SQL standard dialect
*/
var AnsiDialect = class {
	constructor() {
		this.name = "ansi";
	}
};
/**
* MySQL dialect
*/
var MySqlDialect = class {
	constructor() {
		this.name = "mysql";
	}
};
/**
* PostgreSQL dialect
*/
var PostgreSqlDialect = class {
	constructor() {
		this.name = "postgresql";
	}
};
/**
* SQLite dialect
*/
var SQLiteDialect = class {
	constructor() {
		this.name = "sqlite";
	}
};
/**
* Snowflake dialect
*/
var SnowflakeDialect = class {
	constructor() {
		this.name = "snowflake";
	}
};
/**
* Amazon Redshift dialect
*/
var RedshiftDialect = class {
	constructor() {
		this.name = "redshift";
	}
};
/**
* Microsoft SQL Server dialect
*/
var MsSqlDialect = class {
	constructor() {
		this.name = "mssql";
	}
};
/**
* ClickHouse dialect
*/
var ClickHouseDialect = class {
	constructor() {
		this.name = "clickhouse";
	}
};
/**
* Google BigQuery dialect
*/
var BigQueryDialect = class {
	constructor() {
		this.name = "bigquery";
	}
};
/**
* DuckDB dialect
*/
var DuckDbDialect = class {
	constructor() {
		this.name = "duckdb";
	}
};
/**
* Databricks dialect
*/
var DatabricksDialect = class {
	constructor() {
		this.name = "databricks";
	}
};
/**
* Apache Hive dialect
*/
var HiveDialect = class {
	constructor() {
		this.name = "hive";
	}
};
/**
* Oracle dialect
*/
var OracleDialect = class {
	constructor() {
		this.name = "oracle";
	}
};
/**
* All supported dialect names
*/
const SUPPORTED_DIALECTS = [
	"generic",
	"ansi",
	"mysql",
	"postgresql",
	"sqlite",
	"snowflake",
	"redshift",
	"mssql",
	"clickhouse",
	"bigquery",
	"duckdb",
	"databricks",
	"hive",
	"oracle"
];
/**
* Map of dialect names to dialect classes
*/
const DIALECT_MAP = {
	generic: GenericDialect,
	ansi: AnsiDialect,
	mysql: MySqlDialect,
	postgresql: PostgreSqlDialect,
	sqlite: SQLiteDialect,
	snowflake: SnowflakeDialect,
	redshift: RedshiftDialect,
	mssql: MsSqlDialect,
	clickhouse: ClickHouseDialect,
	bigquery: BigQueryDialect,
	duckdb: DuckDbDialect,
	databricks: DatabricksDialect,
	hive: HiveDialect,
	oracle: OracleDialect
};
/** Create a dialect instance from a string name (case-insensitive) */
function dialectFromString(name) {
	const normalized = name.toLowerCase();
	const DialectClass = DIALECT_MAP[{
		postgres: "postgresql",
		pg: "postgresql",
		sqlserver: "mssql",
		duck: "duckdb"
	}[normalized] ?? normalized];
	return DialectClass ? new DialectClass() : void 0;
}

//#endregion
//#region src/types/errors.ts
/**
* Error thrown when SQL parsing fails
*/
var ParserError = class ParserError extends Error {
	constructor(message, location) {
		super(message);
		this.name = "ParserError";
		this.location = location;
		if (Error.captureStackTrace) Error.captureStackTrace(this, ParserError);
	}
	/**
	* Create a ParserError from a WASM error object
	*/
	static fromWasmError(error) {
		if (typeof error === "string") return new ParserError(error);
		if (error && typeof error === "object") {
			const err = error;
			return new ParserError(typeof err.message === "string" ? err.message : String(error), typeof err.line === "number" && typeof err.column === "number" ? {
				line: err.line,
				column: err.column
			} : void 0);
		}
		return new ParserError(String(error));
	}
};
/**
* Error thrown when WASM module fails to initialize
*/
var WasmInitError = class WasmInitError extends Error {
	constructor(message) {
		super(message);
		this.name = "WasmInitError";
		if (Error.captureStackTrace) Error.captureStackTrace(this, WasmInitError);
	}
};

//#endregion
//#region src/wasm.ts
let wasmModule = null;
let initPromise = null;
const isBrowser = typeof window !== "undefined" && typeof process === "undefined";
/** Get initialized WASM module or throw */
function getWasmModule() {
	if (wasmModule) return wasmModule;
	throw new WasmInitError("WASM module not yet initialized. Call `await init()` before using the parser.");
}
/**
* Initialize the WASM module. Must be called before using any parser functions.
* Safe to call multiple times, subsequent calls are no-ops.
*/
async function init() {
	if (wasmModule) return;
	if (!initPromise) initPromise = (async () => {
		try {
			const wasm = await import(
				/* @vite-ignore */
				"../wasm/sqlparser_rs_wasm.js"
);
			if (isBrowser) {
				const wasmUrl = new URL("../wasm/sqlparser_rs_wasm_bg.wasm", import.meta.url);
				await wasm.default({ module_or_path: wasmUrl });
			} else {
				const { readFile } = await import(
					/* @vite-ignore */
					"node:fs/promises"
);
				const bytes = await readFile(new URL("../wasm/sqlparser_rs_wasm_bg.wasm", import.meta.url));
				await wasm.default({ module_or_path: bytes });
			}
			wasmModule = wasm;
		} catch (error) {
			throw new WasmInitError(`Failed to load WASM module: ${error instanceof Error ? error.message : String(error)}`);
		}
	})();
	await initPromise;
}

//#endregion
//#region src/parser.ts
function resolveDialect(dialect = "generic") {
	if (typeof dialect === "string") {
		const resolved = dialectFromString(dialect);
		if (!resolved) throw new Error(`Unknown dialect: ${dialect}`);
		return resolved;
	}
	return dialect;
}
/**
* SQL Parser - parses SQL statements into AST
*
* @example
* ```typescript
* import { Parser, PostgreSqlDialect } from '@guanmingchiu/sqlparser-ts';
*
* const statements = Parser.parse('SELECT * FROM users', 'postgresql');
*
* // With options
* const parser = new Parser(new PostgreSqlDialect())
*   .withOptions({ trailingCommas: true });
* const ast = parser.parse('SELECT a, b, FROM users');
* ```
*/
var Parser = class Parser {
	constructor(dialect = new GenericDialect()) {
		this.dialect = dialect;
		this.options = {};
	}
	/** Set recursion limit for parsing nested expressions */
	withRecursionLimit(limit) {
		this.options.recursionLimit = limit;
		return this;
	}
	/** Set parser options */
	withOptions(options) {
		this.options = {
			...this.options,
			...options
		};
		return this;
	}
	/** Parse SQL statements */
	parse(sql) {
		const wasm = getWasmModule();
		try {
			if (Object.keys(this.options).length > 0) return wasm.parse_sql_with_options(this.dialect.name, sql, this.options);
			return wasm.parse_sql(this.dialect.name, sql);
		} catch (error) {
			throw ParserError.fromWasmError(error);
		}
	}
	/** Parse SQL into AST */
	static parse(sql, dialect = "generic") {
		return new Parser(resolveDialect(dialect)).parse(sql);
	}
	/** Parse SQL and return AST as JSON string */
	static parseToJson(sql, dialect = "generic") {
		const wasm = getWasmModule();
		try {
			return wasm.parse_sql_to_json_string(resolveDialect(dialect).name, sql);
		} catch (error) {
			throw ParserError.fromWasmError(error);
		}
	}
	/** Parse SQL and return formatted string representation */
	static parseToString(sql, dialect = "generic") {
		const wasm = getWasmModule();
		try {
			return wasm.parse_sql_to_string(resolveDialect(dialect).name, sql);
		} catch (error) {
			throw ParserError.fromWasmError(error);
		}
	}
	/** Format SQL by parsing and regenerating it */
	static format(sql, dialect = "generic") {
		const wasm = getWasmModule();
		try {
			return wasm.format_sql(resolveDialect(dialect).name, sql);
		} catch (error) {
			throw ParserError.fromWasmError(error);
		}
	}
	/**
	* Validate SQL syntax
	* @throws ParserError if SQL is invalid
	*/
	static validate(sql, dialect = "generic") {
		const wasm = getWasmModule();
		try {
			return wasm.validate_sql(resolveDialect(dialect).name, sql);
		} catch (error) {
			throw ParserError.fromWasmError(error);
		}
	}
	/** Get list of supported dialect names */
	static getSupportedDialects() {
		return getWasmModule().get_supported_dialects();
	}
};
/**
* Parse SQL into AST
*/
function parse(sql, dialect = "generic") {
	return Parser.parse(sql, dialect);
}
/**
* Validate SQL syntax
* @throws ParserError if SQL is invalid
*/
function validate(sql, dialect = "generic") {
	return Parser.validate(sql, dialect);
}
/**
* Format SQL by parsing and regenerating it
*/
function format(sql, dialect = "generic") {
	return Parser.format(sql, dialect);
}

//#endregion
export { AnsiDialect, BigQueryDialect, ClickHouseDialect, DatabricksDialect, DuckDbDialect, GenericDialect, HiveDialect, MsSqlDialect, MySqlDialect, OracleDialect, Parser, ParserError, PostgreSqlDialect, RedshiftDialect, SQLiteDialect, SUPPORTED_DIALECTS, SnowflakeDialect, WasmInitError, dialectFromString, format, init, parse, validate };