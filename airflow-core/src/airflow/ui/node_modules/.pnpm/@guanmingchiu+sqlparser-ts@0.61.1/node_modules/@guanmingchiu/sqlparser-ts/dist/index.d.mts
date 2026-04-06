//#region src/dialects.d.ts
/**
 * SQL Dialects
 *
 * Each dialect class represents a specific SQL dialect supported by the parser.
 * These are thin wrappers that provide type safety and a clean API.
 */
/**
 * Base interface for all dialects
 */
interface Dialect {
  /** The name of the dialect as recognized by the WASM module */
  readonly name: string;
}
/**
 * Generic SQL dialect - accepts most SQL syntax
 */
declare class GenericDialect implements Dialect {
  readonly name = "generic";
}
/**
 * ANSI SQL standard dialect
 */
declare class AnsiDialect implements Dialect {
  readonly name = "ansi";
}
/**
 * MySQL dialect
 */
declare class MySqlDialect implements Dialect {
  readonly name = "mysql";
}
/**
 * PostgreSQL dialect
 */
declare class PostgreSqlDialect implements Dialect {
  readonly name = "postgresql";
}
/**
 * SQLite dialect
 */
declare class SQLiteDialect implements Dialect {
  readonly name = "sqlite";
}
/**
 * Snowflake dialect
 */
declare class SnowflakeDialect implements Dialect {
  readonly name = "snowflake";
}
/**
 * Amazon Redshift dialect
 */
declare class RedshiftDialect implements Dialect {
  readonly name = "redshift";
}
/**
 * Microsoft SQL Server dialect
 */
declare class MsSqlDialect implements Dialect {
  readonly name = "mssql";
}
/**
 * ClickHouse dialect
 */
declare class ClickHouseDialect implements Dialect {
  readonly name = "clickhouse";
}
/**
 * Google BigQuery dialect
 */
declare class BigQueryDialect implements Dialect {
  readonly name = "bigquery";
}
/**
 * DuckDB dialect
 */
declare class DuckDbDialect implements Dialect {
  readonly name = "duckdb";
}
/**
 * Databricks dialect
 */
declare class DatabricksDialect implements Dialect {
  readonly name = "databricks";
}
/**
 * Apache Hive dialect
 */
declare class HiveDialect implements Dialect {
  readonly name = "hive";
}
/**
 * Oracle dialect
 */
declare class OracleDialect implements Dialect {
  readonly name = "oracle";
}
/**
 * All supported dialect names
 */
declare const SUPPORTED_DIALECTS: readonly ["generic", "ansi", "mysql", "postgresql", "sqlite", "snowflake", "redshift", "mssql", "clickhouse", "bigquery", "duckdb", "databricks", "hive", "oracle"];
type DialectName = (typeof SUPPORTED_DIALECTS)[number];
/** Create a dialect instance from a string name (case-insensitive) */
declare function dialectFromString(name: string): Dialect | undefined;
//#endregion
//#region src/types/ast.d.ts
/**
 * TypeScript type definitions for sqlparser-ts AST
 *
 * These types mirror the Rust AST structure from the sqlparser crate.
 * The AST is serialized as JSON from Rust, so these types represent
 * the JSON structure.
 */
/**
 * An identifier (table name, column name, etc.)
 */
interface Ident {
  value: string;
  quoteStyle?: string | null;
}
/**
 * A compound identifier like schema.table.column
 */
type ObjectName = Ident[];
/**
 * Binary operators
 */
type BinaryOperator = 'Plus' | 'Minus' | 'Multiply' | 'Divide' | 'Modulo' | 'StringConcat' | 'Gt' | 'Lt' | 'GtEq' | 'LtEq' | 'Spaceship' | 'Eq' | 'NotEq' | 'And' | 'Or' | 'Xor' | 'BitwiseOr' | 'BitwiseAnd' | 'BitwiseXor' | 'PGBitwiseXor' | 'PGBitwiseShiftLeft' | 'PGBitwiseShiftRight' | 'PGRegexMatch' | 'PGRegexIMatch' | 'PGRegexNotMatch' | 'PGRegexNotIMatch';
/**
 * Unary operators
 */
type UnaryOperator = 'Plus' | 'Minus' | 'Not' | 'PGBitwiseNot' | 'PGSquareRoot' | 'PGCubeRoot' | 'PGPostfixFactorial' | 'PGPrefixFactorial' | 'PGAbs';
/**
 * SQL Value types
 */
type Value = {
  Number: [string, boolean];
} | {
  SingleQuotedString: string;
} | {
  DoubleQuotedString: string;
} | {
  DollarQuotedString: {
    value: string;
    tag?: string;
  };
} | {
  EscapedStringLiteral: string;
} | {
  NationalStringLiteral: string;
} | {
  HexStringLiteral: string;
} | {
  Boolean: boolean;
} | {
  Null: null;
} | {
  Placeholder: string;
};
/**
 * SQL Expression
 */
type Expr = {
  Identifier: Ident;
} | {
  CompoundIdentifier: Ident[];
} | {
  Value: Value;
} | {
  BinaryOp: {
    left: Expr;
    op: BinaryOperator;
    right: Expr;
  };
} | {
  UnaryOp: {
    op: UnaryOperator;
    expr: Expr;
  };
} | {
  Nested: Expr;
} | {
  IsNull: Expr;
} | {
  IsNotNull: Expr;
} | {
  IsTrue: Expr;
} | {
  IsFalse: Expr;
} | {
  IsUnknown: Expr;
} | {
  IsNotTrue: Expr;
} | {
  IsNotFalse: Expr;
} | {
  IsNotUnknown: Expr;
} | {
  InList: {
    expr: Expr;
    list: Expr[];
    negated: boolean;
  };
} | {
  InSubquery: {
    expr: Expr;
    subquery: Query;
    negated: boolean;
  };
} | {
  Between: {
    expr: Expr;
    negated: boolean;
    low: Expr;
    high: Expr;
  };
} | {
  Like: {
    expr: Expr;
    negated: boolean;
    pattern: Expr;
    escapeChar?: string;
  };
} | {
  ILike: {
    expr: Expr;
    negated: boolean;
    pattern: Expr;
    escapeChar?: string;
  };
} | {
  SimilarTo: {
    expr: Expr;
    negated: boolean;
    pattern: Expr;
    escapeChar?: string;
  };
} | {
  Case: {
    operand?: Expr;
    conditions: Expr[];
    results: Expr[];
    elseResult?: Expr;
  };
} | {
  Cast: {
    expr: Expr;
    dataType: DataType;
  };
} | {
  TryCast: {
    expr: Expr;
    dataType: DataType;
  };
} | {
  SafeCast: {
    expr: Expr;
    dataType: DataType;
  };
} | {
  Extract: {
    field: DateTimeField;
    expr: Expr;
  };
} | {
  Substring: {
    expr: Expr;
    substringFrom?: Expr;
    substringFor?: Expr;
  };
} | {
  Trim: {
    expr: Expr;
    trimWhere?: TrimWhereField;
    trimWhat?: Expr;
  };
} | {
  Collate: {
    expr: Expr;
    collation: ObjectName;
  };
} | {
  Function: FunctionExpr;
} | {
  Subquery: Query;
} | {
  Exists: {
    subquery: Query;
    negated: boolean;
  };
} | {
  Wildcard: null;
} | {
  QualifiedWildcard: ObjectName;
} | {
  Tuple: Expr[];
} | {
  Array: {
    elem: Expr[];
    named: boolean;
  };
} | {
  MapAccess: {
    column: Expr;
    keys: Expr[];
  };
} | {
  CompositeAccess: {
    expr: Expr;
    key: Ident;
  };
} | {
  TypedString: {
    dataType: DataType;
    value: string;
  };
} | {
  AtTimeZone: {
    timestamp: Expr;
    timeZone: string;
  };
} | {
  Interval: IntervalExpr;
} | 'Wildcard';
/**
 * Function expression
 */
interface FunctionExpr {
  name: ObjectName;
  args: FunctionArg[];
  over?: WindowSpec;
  distinct: boolean;
  special: boolean;
  orderBy: OrderByExpr[];
}
/**
 * Function argument
 */
type FunctionArg = {
  Unnamed: FunctionArgExpr;
} | {
  Named: {
    name: Ident;
    arg: FunctionArgExpr;
  };
};
type FunctionArgExpr = {
  Expr: Expr;
} | {
  QualifiedWildcard: ObjectName;
} | 'Wildcard';
/**
 * Interval expression
 */
interface IntervalExpr {
  value: Expr;
  leadingField?: DateTimeField;
  leadingPrecision?: number;
  lastField?: DateTimeField;
  fractionalSecondsPrecision?: number;
}
/**
 * Date/time field for EXTRACT
 */
type DateTimeField = 'Year' | 'Month' | 'Week' | 'Day' | 'Hour' | 'Minute' | 'Second' | 'Millisecond' | 'Microsecond' | 'Nanosecond' | 'Century' | 'Decade' | 'Dow' | 'Doy' | 'Epoch' | 'Isodow' | 'Isoyear' | 'Julian' | 'Quarter' | 'Timezone' | 'TimezoneHour' | 'TimezoneMinute';
/**
 * Trim where field
 */
type TrimWhereField = 'Both' | 'Leading' | 'Trailing';
/**
 * SQL Data types
 */
type DataType = 'Boolean' | 'TinyInt' | 'SmallInt' | 'Int' | 'Integer' | 'BigInt' | {
  Float: number | null;
} | 'Real' | 'Double' | {
  Decimal: [number | null, number | null];
} | {
  Numeric: [number | null, number | null];
} | {
  Varchar: number | null;
} | {
  Char: number | null;
} | 'Text' | 'Uuid' | 'Date' | {
  Time: [number | null, boolean];
} | {
  Timestamp: [number | null, boolean];
} | 'Interval' | 'Binary' | {
  Varbinary: number | null;
} | 'Blob' | 'Bytes' | 'Json' | 'Jsonb' | {
  Array: DataType;
} | {
  Custom: [ObjectName, string[]];
} | 'Regclass' | 'String';
/**
 * Window specification
 */
interface WindowSpec {
  partitionBy: Expr[];
  orderBy: OrderByExpr[];
  windowFrame?: WindowFrame;
}
/**
 * Window frame
 */
interface WindowFrame {
  units: WindowFrameUnits;
  startBound: WindowFrameBound;
  endBound?: WindowFrameBound;
}
type WindowFrameUnits = 'Rows' | 'Range' | 'Groups';
type WindowFrameBound = 'CurrentRow' | 'UnboundedPreceding' | 'UnboundedFollowing' | {
  Preceding: Expr | null;
} | {
  Following: Expr | null;
};
/**
 * ORDER BY expression
 */
interface OrderByExpr {
  expr: Expr;
  asc?: boolean;
  nullsFirst?: boolean;
}
/**
 * SELECT item
 */
type SelectItem = 'UnnamedExpr' | {
  UnnamedExpr: Expr;
} | {
  ExprWithAlias: {
    expr: Expr;
    alias: Ident;
  };
} | {
  QualifiedWildcard: [ObjectName, WildcardAdditionalOptions];
} | {
  Wildcard: WildcardAdditionalOptions;
};
interface WildcardAdditionalOptions {
  optExclude?: ExcludeSelectItem;
  optExcept?: ExceptSelectItem;
  optRename?: RenameSelectItem;
  optReplace?: ReplaceSelectItem;
}
interface ExcludeSelectItem {
  items: Ident[];
}
interface ExceptSelectItem {
  firstElement: Ident;
  additionalElements: Ident[];
}
interface RenameSelectItem {
  items: IdentWithAlias[];
}
interface ReplaceSelectItem {
  items: ReplaceSelectElement[];
}
interface IdentWithAlias {
  ident: Ident;
  alias: Ident;
}
interface ReplaceSelectElement {
  expr: Expr;
  columnName: Ident;
  asKeyword: boolean;
}
/**
 * FROM clause table reference
 */
type TableFactor = {
  Table: {
    name: ObjectName;
    alias?: TableAlias;
    args?: FunctionArg[];
    withHints: Expr[];
  };
} | {
  Derived: {
    lateral: boolean;
    subquery: Query;
    alias?: TableAlias;
  };
} | {
  TableFunction: {
    expr: Expr;
    alias?: TableAlias;
  };
} | {
  NestedJoin: {
    tableWithJoins: TableWithJoins;
    alias?: TableAlias;
  };
} | {
  UNNEST: {
    alias?: TableAlias;
    arrayExprs: Expr[];
    withOffset: boolean;
    withOffsetAlias?: Ident;
  };
};
/**
 * Table alias
 */
interface TableAlias {
  name: Ident;
  columns: Ident[];
}
/**
 * Table with joins
 */
interface TableWithJoins {
  relation: TableFactor;
  joins: Join[];
}
/**
 * JOIN clause
 */
interface Join {
  relation: TableFactor;
  joinOperator: JoinOperator;
}
type JoinOperator = {
  Inner: JoinConstraint;
} | {
  LeftOuter: JoinConstraint;
} | {
  RightOuter: JoinConstraint;
} | {
  FullOuter: JoinConstraint;
} | 'CrossJoin' | {
  LeftSemi: JoinConstraint;
} | {
  RightSemi: JoinConstraint;
} | {
  LeftAnti: JoinConstraint;
} | {
  RightAnti: JoinConstraint;
} | 'CrossApply' | 'OuterApply';
type JoinConstraint = {
  On: Expr;
} | {
  Using: Ident[];
} | 'Natural' | 'None';
/**
 * SELECT statement
 */
interface Select {
  distinct?: Distinct;
  top?: Top;
  projection: SelectItem[];
  into?: SelectInto;
  from: TableWithJoins[];
  lateralViews: LateralView[];
  selection?: Expr;
  groupBy: GroupByExpr;
  clusterBy: Expr[];
  distributeBy: Expr[];
  sortBy: Expr[];
  having?: Expr;
  namedWindow: NamedWindowDefinition[];
  qualify?: Expr;
}
type Distinct = boolean | {
  On: Expr[];
};
interface Top {
  withTies: boolean;
  percent: boolean;
  quantity?: Expr;
}
interface SelectInto {
  temporary: boolean;
  unlogged: boolean;
  table: boolean;
  name: ObjectName;
}
interface LateralView {
  lateralViewExpr: Expr;
  lateralViewName: ObjectName;
  lateralColAlias: Ident[];
  outer: boolean;
}
type GroupByExpr = {
  Expressions: Expr[];
} | 'All';
interface NamedWindowDefinition {
  name: Ident;
  windowSpec: WindowSpec;
}
/**
 * Set expression (UNION, INTERSECT, EXCEPT)
 */
type SetExpr = {
  Select: Select;
} | {
  Query: Query;
} | {
  SetOperation: {
    op: SetOperator;
    setQuantifier: SetQuantifier;
    left: SetExpr;
    right: SetExpr;
  };
} | {
  Values: Values;
} | {
  Insert: Statement;
};
type SetOperator = 'Union' | 'Except' | 'Intersect';
type SetQuantifier = 'All' | 'Distinct' | 'None';
interface Values {
  explicit_row: boolean;
  rows: Expr[][];
}
/**
 * WITH clause (CTE)
 */
interface With {
  recursive: boolean;
  cteTables: Cte[];
}
interface Cte {
  alias: TableAlias;
  query: Query;
  from?: Ident;
}
/**
 * Query (top-level SELECT)
 */
interface Query {
  with?: With;
  body: SetExpr;
  orderBy: OrderByExpr[];
  limit?: Expr;
  offset?: Offset;
  fetch?: Fetch;
  locks: LockClause[];
}
interface Offset {
  value: Expr;
  rows: OffsetRows;
}
type OffsetRows = 'None' | 'Row' | 'Rows';
interface Fetch {
  withTies: boolean;
  percent: boolean;
  quantity?: Expr;
}
interface LockClause {
  lockType: LockType;
  of?: ObjectName;
  nonblock?: NonBlock;
}
type LockType = 'Share' | 'Update';
type NonBlock = 'Wait' | 'Nowait' | 'SkipLocked';
/**
 * Column definition for CREATE TABLE
 */
interface ColumnDef {
  name: Ident;
  dataType: DataType;
  collation?: ObjectName;
  options: ColumnOptionDef[];
}
interface ColumnOptionDef {
  name?: Ident;
  option: ColumnOption;
}
type ColumnOption = 'Null' | 'NotNull' | {
  Default: Expr;
} | {
  Unique: {
    isPrimary: boolean;
  };
} | {
  ForeignKey: ForeignKeyOption;
} | {
  Check: Expr;
} | 'AutoIncrement' | {
  OnUpdate: Expr;
} | {
  Generated: GeneratedAs;
} | {
  Comment: string;
};
interface ForeignKeyOption {
  foreignTable: ObjectName;
  referredColumns: Ident[];
  onDelete?: ReferentialAction;
  onUpdate?: ReferentialAction;
}
type ReferentialAction = 'Restrict' | 'Cascade' | 'SetNull' | 'NoAction' | 'SetDefault';
interface GeneratedAs {
  generationType?: GeneratedExpressionMode;
  expr: Expr;
}
type GeneratedExpressionMode = 'Virtual' | 'Stored';
/**
 * Table constraint
 */
type TableConstraint = {
  Unique: {
    name?: Ident;
    columns: Ident[];
    isPrimary: boolean;
  };
} | {
  ForeignKey: {
    name?: Ident;
    columns: Ident[];
    foreignTable: ObjectName;
    referredColumns: Ident[];
    onDelete?: ReferentialAction;
    onUpdate?: ReferentialAction;
  };
} | {
  Check: {
    name?: Ident;
    expr: Expr;
  };
} | {
  Index: {
    displayAsKey: boolean;
    name?: Ident;
    indexType?: IndexType;
    columns: Ident[];
  };
};
type IndexType = 'BTree' | 'Hash';
/**
 * All SQL statement types
 */
type Statement = {
  Query: Query;
} | {
  Insert: {
    orConflict?: SqliteOnConflict;
    into: boolean;
    tableName: ObjectName;
    columns: Ident[];
    overwrite: boolean;
    source: Query;
    partitioned?: Expr[];
    afterColumns: Ident[];
    table: boolean;
    on?: OnInsert;
    returning?: SelectItem[];
  };
} | {
  Update: {
    table: TableWithJoins;
    assignments: Assignment[];
    from?: TableWithJoins;
    selection?: Expr;
    returning?: SelectItem[];
  };
} | {
  Delete: {
    tables: ObjectName[];
    from: TableWithJoins[];
    using?: TableWithJoins[];
    selection?: Expr;
    returning?: SelectItem[];
  };
} | {
  CreateTable: {
    orReplace: boolean;
    temporary: boolean;
    external: boolean;
    global?: boolean;
    ifNotExists: boolean;
    transient: boolean;
    name: ObjectName;
    columns: ColumnDef[];
    constraints: TableConstraint[];
    hiveDistribution: HiveDistributionStyle;
    hiveFormats?: HiveFormat;
    tableProperties: SqlOption[];
    withOptions: SqlOption[];
    fileFormat?: FileFormat;
    location?: string;
    query?: Query;
    withoutRowid: boolean;
    like?: ObjectName;
    cloneClause?: ObjectName;
    engine?: string;
    defaultCharset?: string;
    collation?: string;
    onCommit?: OnCommit;
    onCluster?: string;
    orderBy?: Ident[];
    strict: boolean;
  };
} | {
  CreateView: {
    orReplace: boolean;
    materialized: boolean;
    name: ObjectName;
    columns: Ident[];
    query: Query;
    withOptions: SqlOption[];
    clusterBy: Ident[];
  };
} | {
  CreateIndex: {
    name?: ObjectName;
    tableName: ObjectName;
    using?: Ident;
    columns: OrderByExpr[];
    unique: boolean;
    concurrently: boolean;
    ifNotExists: boolean;
    include: Ident[];
    nullsDistinct?: boolean;
    predicate?: Expr;
  };
} | {
  AlterTable: {
    name: ObjectName;
    ifExists: boolean;
    only: boolean;
    operations: AlterTableOperation[];
  };
} | {
  Drop: DropStatement;
} | {
  Truncate: {
    tableName: ObjectName;
    partitions?: Expr[];
    table: boolean;
  };
} | {
  SetVariable: {
    local: boolean;
    hivevar: boolean;
    variable: ObjectName;
    value: Expr[];
  };
} | {
  ShowVariable: {
    variable: Ident[];
  };
} | {
  ShowCreate: {
    objType: ShowCreateObject;
    objName: ObjectName;
  };
} | {
  ShowTables: {
    extended: boolean;
    full: boolean;
    dbName?: Ident;
    filter?: ShowStatementFilter;
  };
} | {
  ShowColumns: {
    extended: boolean;
    full: boolean;
    tableName: ObjectName;
    filter?: ShowStatementFilter;
  };
} | {
  StartTransaction: {
    modes: TransactionMode[];
    begin: boolean;
  };
} | {
  Commit: {
    chain: boolean;
  };
} | {
  Rollback: {
    chain: boolean;
    savepoint?: Ident;
  };
} | {
  Savepoint: {
    name: Ident;
  };
} | {
  ReleaseSavepoint: {
    name: Ident;
  };
} | {
  CreateSchema: {
    schemaName: SchemaName;
    ifNotExists: boolean;
  };
} | {
  CreateDatabase: {
    dbName: ObjectName;
    ifNotExists: boolean;
    location?: string;
    managedLocation?: string;
  };
} | {
  Grant: {
    privileges: Privileges;
    objects: GrantObjects;
    grantees: Ident[];
    withGrantOption: boolean;
    grantedBy?: Ident;
  };
} | {
  Revoke: {
    privileges: Privileges;
    objects: GrantObjects;
    grantees: Ident[];
    grantedBy?: Ident;
    cascade: boolean;
  };
} | {
  Explain: {
    describeAlias: DescribeAlias;
    analyze: boolean;
    verbose: boolean;
    statement: Statement;
  };
} | {
  Copy: {
    source: CopySource;
    to: boolean;
    target: CopyTarget;
    options: CopyOption[];
    legacyOptions: CopyLegacyOption[];
    values: string[][];
  };
} | {
  Close: {
    cursor: CloseCursor;
  };
} | {
  Declare: {
    name: Ident;
    binary: boolean;
    sensitive?: boolean;
    scroll?: boolean;
    hold?: boolean;
    query: Query;
  };
} | {
  Fetch: {
    name: Ident;
    direction: FetchDirection;
    into?: ObjectName;
  };
} | {
  Discard: {
    objectType: DiscardObject;
  };
} | 'ExplainTable' | {
  Analyze: {
    tableName: ObjectName;
    partitions?: Expr[];
    forColumns: boolean;
    columns: Ident[];
    cacheMetadata: boolean;
    noscan: boolean;
    computeStatistics: boolean;
  };
} | {
  Merge: {
    into: boolean;
    table: TableFactor;
    source: TableFactor;
    on: Expr;
    clauses: MergeClause[];
  };
} | {
  Execute: {
    name: ObjectName;
    parameters: Expr[];
  };
} | {
  Prepare: {
    name: Ident;
    dataTypes: DataType[];
    statement: Statement;
  };
} | {
  Deallocate: {
    name: Ident;
    prepare: boolean;
  };
} | {
  Comment: {
    objectType: CommentObject;
    objectName: ObjectName;
    comment?: string;
    ifExists: boolean;
  };
} | {
  Assert: {
    condition: Expr;
    message?: Expr;
  };
} | 'Kill' | 'Use';
type SqliteOnConflict = 'Rollback' | 'Abort' | 'Fail' | 'Ignore' | 'Replace';
type OnInsert = {
  DoUpdate: DoUpdate;
} | 'DoNothing';
interface DoUpdate {
  assignments: Assignment[];
  selection?: Expr;
}
interface Assignment {
  id: Ident[];
  value: Expr;
}
type HiveDistributionStyle = 'PARTITIONED' | 'CLUSTERED' | 'SKEWED' | 'NONE';
interface HiveFormat {
  rowFormat?: HiveRowFormat;
  storage?: HiveIOFormat;
  location?: string;
}
type HiveRowFormat = {
  Serde: {
    class: string;
  };
} | {
  Delimited: null;
};
interface HiveIOFormat {
  inputFormat: string;
  outputFormat: string;
}
interface SqlOption {
  name: Ident;
  value: Value;
}
type FileFormat = 'TEXTFILE' | 'SEQUENCEFILE' | 'ORC' | 'PARQUET' | 'AVRO' | 'RCFILE' | 'JSONFILE';
type OnCommit = 'DeleteRows' | 'PreserveRows' | 'Drop';
type AlterTableOperation = {
  AddConstraint: TableConstraint;
} | {
  AddColumn: {
    columnKeyword: boolean;
    ifNotExists: boolean;
    columnDef: ColumnDef;
  };
} | {
  DropConstraint: {
    ifExists: boolean;
    name: Ident;
    cascade: boolean;
  };
} | {
  DropColumn: {
    columnName: Ident;
    ifExists: boolean;
    cascade: boolean;
  };
} | {
  RenameColumn: {
    oldColumnName: Ident;
    newColumnName: Ident;
  };
} | {
  RenameTable: {
    tableName: ObjectName;
  };
} | {
  ChangeColumn: {
    oldName: Ident;
    newName: Ident;
    dataType: DataType;
    options: ColumnOption[];
  };
} | {
  AlterColumn: {
    columnName: Ident;
    op: AlterColumnOperation;
  };
} | {
  RenameConstraint: {
    oldName: Ident;
    newName: Ident;
  };
};
type AlterColumnOperation = {
  SetNotNull: null;
} | {
  DropNotNull: null;
} | {
  SetDefault: Expr;
} | {
  DropDefault: null;
} | {
  SetDataType: DataType;
};
interface DropStatement {
  objectType: ObjectType;
  ifExists: boolean;
  names: ObjectName[];
  cascade: boolean;
  restrict: boolean;
  purge: boolean;
}
type ObjectType = 'Table' | 'View' | 'Index' | 'Schema' | 'Role' | 'Sequence' | 'Stage';
type ShowCreateObject = 'Event' | 'Function' | 'Procedure' | 'Table' | 'Trigger' | 'View';
type ShowStatementFilter = {
  Like: string;
} | {
  ILike: string;
} | {
  Where: Expr;
};
type TransactionMode = {
  AccessMode: TransactionAccessMode;
} | {
  IsolationLevel: TransactionIsolationLevel;
};
type TransactionAccessMode = 'ReadOnly' | 'ReadWrite';
type TransactionIsolationLevel = 'ReadUncommitted' | 'ReadCommitted' | 'RepeatableRead' | 'Serializable';
type SchemaName = {
  Simple: ObjectName;
} | {
  UnnamedAuthorization: Ident;
} | {
  NamedAuthorization: [ObjectName, Ident];
};
type Privileges = {
  Actions: Action[];
} | 'All';
type Action = 'Select' | {
  Select: Ident[];
} | 'Insert' | {
  Insert: Ident[];
} | 'Update' | {
  Update: Ident[];
} | 'Delete' | 'Truncate' | 'References' | {
  References: Ident[];
} | 'Trigger' | 'Connect' | 'Create' | 'Execute' | 'Temporary' | 'Usage';
type GrantObjects = {
  AllSequencesInSchema: ObjectName[];
} | {
  AllTablesInSchema: ObjectName[];
} | {
  Schemas: ObjectName[];
} | {
  Sequences: ObjectName[];
} | {
  Tables: ObjectName[];
};
type DescribeAlias = 'Describe' | 'Explain' | 'Desc';
type CopySource = {
  Table: ObjectName;
  columns: Ident[];
} | {
  Query: Query;
};
type CopyTarget = {
  File: {
    filename: string;
  };
} | {
  Program: {
    command: string;
  };
} | 'Stdout' | 'Stdin';
interface CopyOption {
  key: string;
  value?: string;
}
interface CopyLegacyOption {
  key: string;
  value?: string;
}
type CloseCursor = 'All' | {
  Specific: {
    name: Ident;
  };
};
type FetchDirection = {
  Count: Expr;
} | 'Next' | 'Prior' | 'First' | 'Last' | 'Absolute' | 'Relative' | {
  Absolute: Expr;
} | {
  Relative: Expr;
} | 'All' | 'Forward' | {
  Forward: Expr;
} | 'ForwardAll' | 'Backward' | {
  Backward: Expr;
} | 'BackwardAll';
type DiscardObject = 'All' | 'Plans' | 'Sequences' | 'Temp';
type MergeClause = {
  MatchedUpdate: {
    predicate?: Expr;
    assignments: Assignment[];
  };
} | {
  MatchedDelete: {
    predicate?: Expr;
  };
} | {
  NotMatched: {
    predicate?: Expr;
    columns: Ident[];
    values: Values;
  };
};
type CommentObject = 'Column' | 'Table';
//#endregion
//#region src/wasm.d.ts
/**
 * Initialize the WASM module. Must be called before using any parser functions.
 * Safe to call multiple times, subsequent calls are no-ops.
 */
declare function init(): Promise<void>;
//#endregion
//#region src/parser.d.ts
/** Dialect can be specified as a Dialect instance or a string name */
type DialectInput = Dialect | DialectName;
/**
 * Parser options
 */
interface ParserOptions {
  /** Allow trailing commas in SELECT lists */
  trailingCommas?: boolean;
  /** Maximum recursion depth for parsing nested expressions */
  recursionLimit?: number;
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
declare class Parser {
  private dialect;
  private options;
  constructor(dialect?: Dialect);
  /** Set recursion limit for parsing nested expressions */
  withRecursionLimit(limit: number): Parser;
  /** Set parser options */
  withOptions(options: ParserOptions): Parser;
  /** Parse SQL statements */
  parse(sql: string): Statement[];
  /** Parse SQL into AST */
  static parse(sql: string, dialect?: DialectInput): Statement[];
  /** Parse SQL and return AST as JSON string */
  static parseToJson(sql: string, dialect?: DialectInput): string;
  /** Parse SQL and return formatted string representation */
  static parseToString(sql: string, dialect?: DialectInput): string;
  /** Format SQL by parsing and regenerating it */
  static format(sql: string, dialect?: DialectInput): string;
  /**
   * Validate SQL syntax
   * @throws ParserError if SQL is invalid
   */
  static validate(sql: string, dialect?: DialectInput): boolean;
  /** Get list of supported dialect names */
  static getSupportedDialects(): string[];
}
/**
 * Parse SQL into AST
 */
declare function parse(sql: string, dialect?: DialectInput): Statement[];
/**
 * Validate SQL syntax
 * @throws ParserError if SQL is invalid
 */
declare function validate(sql: string, dialect?: DialectInput): boolean;
/**
 * Format SQL by parsing and regenerating it
 */
declare function format(sql: string, dialect?: DialectInput): string;
//#endregion
//#region src/types/errors.d.ts
/**
 * Location information for parser errors
 */
interface ErrorLocation {
  line: number;
  column: number;
}
/**
 * Error thrown when SQL parsing fails
 */
declare class ParserError extends Error {
  readonly location?: ErrorLocation;
  constructor(message: string, location?: ErrorLocation);
  /**
   * Create a ParserError from a WASM error object
   */
  static fromWasmError(error: unknown): ParserError;
}
/**
 * Error thrown when WASM module fails to initialize
 */
declare class WasmInitError extends Error {
  constructor(message: string);
}
//#endregion
export { Action, AlterColumnOperation, AlterTableOperation, AnsiDialect, Assignment, BigQueryDialect, BinaryOperator, ClickHouseDialect, CloseCursor, ColumnDef, ColumnOption, ColumnOptionDef, CommentObject, CopyLegacyOption, CopyOption, CopySource, CopyTarget, Cte, DataType, DatabricksDialect, DateTimeField, DescribeAlias, type Dialect, type DialectInput, type DialectName, DiscardObject, Distinct, DoUpdate, DropStatement, DuckDbDialect, ErrorLocation, ExceptSelectItem, ExcludeSelectItem, Expr, Fetch, FetchDirection, FileFormat, ForeignKeyOption, FunctionArg, FunctionArgExpr, FunctionExpr, GeneratedAs, GeneratedExpressionMode, GenericDialect, GrantObjects, GroupByExpr, HiveDialect, HiveDistributionStyle, HiveFormat, HiveIOFormat, HiveRowFormat, Ident, IdentWithAlias, IndexType, IntervalExpr, Join, JoinConstraint, JoinOperator, LateralView, LockClause, LockType, MergeClause, MsSqlDialect, MySqlDialect, NamedWindowDefinition, NonBlock, ObjectName, ObjectType, Offset, OffsetRows, OnCommit, OnInsert, OracleDialect, OrderByExpr, Parser, ParserError, type ParserOptions, PostgreSqlDialect, Privileges, Query, RedshiftDialect, ReferentialAction, RenameSelectItem, ReplaceSelectElement, ReplaceSelectItem, SQLiteDialect, SUPPORTED_DIALECTS, SchemaName, Select, SelectInto, SelectItem, SetExpr, SetOperator, SetQuantifier, ShowCreateObject, ShowStatementFilter, SnowflakeDialect, SqlOption, SqliteOnConflict, Statement, TableAlias, TableConstraint, TableFactor, TableWithJoins, Top, TransactionAccessMode, TransactionIsolationLevel, TransactionMode, TrimWhereField, UnaryOperator, Value, Values, WasmInitError, WildcardAdditionalOptions, WindowFrame, WindowFrameBound, WindowFrameUnits, WindowSpec, With, dialectFromString, format, init, parse, validate };