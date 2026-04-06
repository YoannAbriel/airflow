interface Dictionary<T = unknown> {
    [key: string]: T;
}

interface WithEnumExtension {
    'x-enum-descriptions'?: ReadonlyArray<string>;
    'x-enum-varnames'?: ReadonlyArray<string>;
    'x-enumNames'?: ReadonlyArray<string>;
}

/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#external-documentation-object
 */
interface OpenApiExternalDocs {
    description?: string;
    url: string;
}

/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#reference-object
 */
interface OpenApiReference {
    $ref?: string;
}

/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#example-object
 */
interface OpenApiExample extends OpenApiReference {
    description?: string;
    externalValue?: string;
    summary?: string;
    value?: unknown;
}

/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#discriminator-object
 */
interface OpenApiDiscriminator {
    mapping?: Dictionary<string>;
    propertyName: string;
}

/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#xml-object
 */
interface OpenApiXml {
    attribute?: boolean;
    name?: string;
    namespace?: string;
    prefix?: string;
    wrapped?: boolean;
}

/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#schema-object
 */
interface OpenApiSchema extends OpenApiReference, WithEnumExtension {
    additionalProperties?: boolean | OpenApiSchema;
    allOf?: OpenApiSchema[];
    anyOf?: OpenApiSchema[];
    const?: string | number | boolean | null;
    default?: unknown;
    deprecated?: boolean;
    description?: string;
    discriminator?: OpenApiDiscriminator;
    enum?: (string | number)[];
    example?: unknown;
    exclusiveMaximum?: boolean;
    exclusiveMinimum?: boolean;
    externalDocs?: OpenApiExternalDocs;
    format?: 'binary' | 'boolean' | 'byte' | 'date-time' | 'date' | 'double' | 'float' | 'int32' | 'int64' | 'password' | 'string';
    items?: OpenApiSchema;
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    maximum?: number;
    minItems?: number;
    minLength?: number;
    minProperties?: number;
    minimum?: number;
    multipleOf?: number;
    not?: OpenApiSchema[];
    nullable?: boolean;
    oneOf?: OpenApiSchema[];
    pattern?: string;
    prefixItems?: OpenApiSchema[];
    properties?: Dictionary<OpenApiSchema>;
    readOnly?: boolean;
    required?: string[];
    title?: string;
    type?: string | string[];
    uniqueItems?: boolean;
    writeOnly?: boolean;
    xml?: OpenApiXml;
}

/**
 * add only one type for now as that's needed to resolve the reported issue,
 * more types should be added though
 * {@link https://github.com/hey-api/openapi-ts/issues/612}
 */
type MediaType = 'application/json';
/**
 * encoding interface should be added, not adding it for now as it's not needed
 * to resolve the issue reported
 * {@link https://github.com/hey-api/openapi-ts/issues/612}
 */
interface MediaTypeObject {
    example?: unknown;
    examples?: Dictionary<OpenApiExample>;
    schema: OpenApiSchema;
}
/**
 * {@link} https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#parameter-object
 */
interface OpenApiParameter extends OpenApiReference {
    allowEmptyValue?: boolean;
    allowReserved?: boolean;
    content?: Record<MediaType, MediaTypeObject>;
    deprecated?: boolean;
    description?: string;
    example?: unknown;
    examples?: Dictionary<OpenApiExample>;
    explode?: boolean;
    in: 'cookie' | 'formData' | 'header' | 'path' | 'query';
    name: string;
    nullable?: boolean;
    required?: boolean;
    schema?: OpenApiSchema;
    style?: string;
}

interface Enum {
    customDescription?: string;
    customName?: string;
    description?: string;
    value: string | number;
}
interface OperationParameter extends Model {
    in: 'body' | 'cookie' | 'formData' | 'header' | 'path' | 'query';
    mediaType: string | null;
    prop: string;
}
interface OperationParameters extends Pick<Model, '$refs' | 'imports'> {
    parameters: OperationParameter[];
    parametersBody: OperationParameter | null;
    parametersCookie: OperationParameter[];
    parametersForm: OperationParameter[];
    parametersHeader: OperationParameter[];
    parametersPath: OperationParameter[];
    parametersQuery: OperationParameter[];
}
interface OperationResponse extends Model {
    code: number | 'default' | '1XX' | '2XX' | '3XX' | '4XX' | '5XX';
    in: 'header' | 'response';
    responseTypes: Array<'error' | 'success'>;
}
type Method = 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';
interface Operation extends OperationParameters {
    deprecated: boolean;
    description: string | null;
    /**
     * The operationId from OpenAPI specification.
     */
    id: string | null;
    method: Method;
    name: string;
    path: string;
    responseHeader: string | null;
    /**
     * All operation responses defined in OpenAPI specification.
     * Sorted by status code.
     */
    responses: OperationResponse[];
    /**
     * Service name, might be without postfix. This will be used to name the
     * exported class.
     */
    service: string;
    summary: string | null;
}
interface Schema {
    default?: unknown;
    exclusiveMaximum?: boolean;
    exclusiveMinimum?: boolean;
    format?: 'binary' | 'boolean' | 'byte' | 'date-time' | 'date' | 'double' | 'float' | 'int32' | 'int64' | 'password' | 'string';
    isDefinition: boolean;
    isNullable: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    maxItems?: number;
    maxLength?: number;
    maxProperties?: number;
    maximum?: number;
    minItems?: number;
    minLength?: number;
    minProperties?: number;
    minimum?: number;
    multipleOf?: number;
    pattern?: string;
    uniqueItems?: boolean;
}
interface ModelMeta {
    /**
     * Ref to the type in OpenAPI specification.
     */
    $ref: string;
    /**
     * Name passed to the initial `getModel()` call.
     */
    name: string;
}
interface Model extends Schema {
    /**
     * **Experimental.** Contains list of original refs so they can be used
     * to access the schema from anywhere instead of relying on string name.
     * This allows us to do things like detect type of ref.
     */
    $refs: string[];
    base: string;
    deprecated?: boolean;
    description: string | null;
    enum: Enum[];
    enums: Model[];
    export: 'all-of' | 'any-of' | 'array' | 'const' | 'dictionary' | 'enum' | 'generic' | 'interface' | 'one-of' | 'reference';
    imports: string[];
    in: OperationParameter['in'] | OpenApiParameter['in'] | OperationResponse['in'] | '';
    link: Model | Model[] | null;
    meta?: ModelMeta;
    /**
     * @deprecated use `meta.name` instead
     */
    name: string;
    properties: Model[];
    template: string | null;
    type: string;
}
interface Service extends Pick<Model, '$refs' | 'imports' | 'name'> {
    operations: Operation[];
}

interface Client$1 {
    models: Model[];
    server: string;
    services: Service[];
    /**
     * Map of generated types where type names are keys. This is used to track
     * uniquely generated types as we may want to deduplicate if there are
     * multiple definitions with the same name but different value, or if we
     * want to transform names.
     */
    types: Record<string, ModelMeta>;
    version: string;
}

interface PluginTanStackReactQuery {
    /**
     * Generate TanStack React Query output from the provided input.
     */
    name: '@tanstack/react-query';
    /**
     * Name of the generated file.
     * @default 'tanstack-query'
     */
    output?: string;
    /**
     * Generate {@link https://tanstack.com/query/latest/docs/framework/react/guides/query-options `queryOptions()`} and {@link https://tanstack.com/query/latest/docs/framework/react/reference/infiniteQueryOptions `infiniteQueryOptions()`} helpers?
     * @default true
     */
    queryOptions?: boolean;
}

type Plugins = PluginTanStackReactQuery;

type Client = '@hey-api/client-axios' | '@hey-api/client-fetch' | 'angular' | 'axios' | 'fetch' | 'node' | 'xhr';
interface ClientConfig {
    /**
     * Manually set base in OpenAPI config instead of inferring from server value
     * @deprecated
     */
    base?: string;
    /**
     * HTTP client to generate
     * @default 'fetch'
     */
    client?: Client | {
        /**
         * Bundle the client module? Set this to true if you're using a standalone
         * client package and don't want to declare it as a separate dependency.
         * When true, the client module will be generated from the standalone
         * package and bundled with the rest of the generated output. This is
         * useful if you're repackaging the output, publishing it to other users,
         * and you don't want them to install any dependencies.
         * @default false
         */
        bundle?: boolean;
        /**
         * HTTP client to generate
         * @default 'fetch'
         */
        name: Client;
    };
    /**
     * Path to the config file. Set this value if you don't use the default
     * config file name, or it's not located in the project root.
     */
    configFile?: string;
    /**
     * Run in debug mode?
     * @default false
     */
    debug?: boolean;
    /**
     * Skip writing files to disk?
     * @default false
     */
    dryRun?: boolean;
    /**
     * Generate core client classes?
     * @default true
     */
    exportCore?: boolean;
    /**
     * The relative location of the OpenAPI spec
     */
    input: string | Record<string, unknown>;
    /**
     * Custom client class name
     * @deprecated
     */
    name?: string;
    /**
     * The relative location of the output directory
     */
    output: string | {
        /**
         * Process output folder with formatter?
         * @default false
         */
        format?: 'biome' | 'prettier' | false;
        /**
         * Process output folder with linter?
         * @default false
         */
        lint?: 'biome' | 'eslint' | false;
        /**
         * The relative location of the output directory
         */
        path: string;
    };
    /**
     * Plugins are used to generate additional output files from provided input.
     */
    plugins?: ReadonlyArray<Plugins['name'] | Plugins>;
    /**
     * Path to custom request file
     * @deprecated
     */
    request?: string;
    /**
     * Generate JSON schemas?
     * @default true
     */
    schemas?: boolean | {
        /**
         * Generate JSON schemas?
         * @default true
         */
        export?: boolean;
        /**
         * Choose schema type to generate. Select 'form' if you don't want
         * descriptions to reduce bundle size and you plan to use schemas
         * for form validation
         * @default 'json'
         */
        type?: 'form' | 'json';
    };
    /**
     * Generate services?
     * @default true
     */
    services?: boolean | string | {
        /**
         * Group operation methods into service classes? When enabled, you can
         * select which classes to export with `services.include` and/or
         * transform their names with `services.name`.
         *
         * Note that by enabling this option, your services will **NOT**
         * support {@link https://developer.mozilla.org/docs/Glossary/Tree_shaking tree-shaking}.
         * For this reason, it is disabled by default.
         * @default false
         */
        asClass?: boolean;
        /**
         * Generate services?
         * @default true
         */
        export?: boolean;
        /**
         * Filter endpoints to be included in the generated services.
         * The provided string should be a regular expression where matched
         * results will be included in the output. The input pattern this
         * string will be tested against is `{method} {path}`. For example,
         * you can match `POST /api/v1/foo` with `^POST /api/v1/foo$`.
         */
        filter?: string;
        /**
         * Include only service classes with names matching regular expression
         *
         * This option has no effect if `services.asClass` is `false`.
         */
        include?: string;
        /**
         * Customise the method name of methods within the service. By default, {@link Operation.name} is used.
         */
        methodNameBuilder?: (operation: Operation) => string;
        /**
         * Customize the generated service class names. The name variable is
         * obtained from your OpenAPI specification tags.
         *
         * This option has no effect if `services.asClass` is `false`.
         * @default '{{name}}Service'
         */
        name?: string;
        /**
         * Use operation ID to generate operation names?
         * @default true
         */
        operationId?: boolean;
        /**
         * Define shape of returned value from service calls
         * @default 'body'
         * @deprecated
         */
        response?: 'body' | 'response';
    };
    /**
     * Generate types?
     * @default true
     */
    types?: boolean | string | {
        /**
         * Output Date type and possibly runtime transform instead of string for format "date-time"
         * @default false
         */
        dates?: boolean | 'types+transform' | 'types';
        /**
         * Generate enum definitions?
         * @default false
         */
        enums?: 'javascript' | 'typescript' | 'typescript+namespace' | false;
        /**
         * Generate types?
         * @default true
         */
        export?: boolean;
        /**
         * Include only types matching regular expression
         */
        include?: string;
        /**
         * Use your preferred naming pattern
         * @default 'preserve'
         */
        name?: 'PascalCase' | 'preserve';
        /**
         * Generate a tree of types containing all operations? It will be named
         * $OpenApiTs and is generated by default.
         * @default true
         */
        tree?: boolean;
    };
    /**
     * Use options or arguments functions
     * @deprecated
     * @default true
     */
    useOptions?: boolean;
}
type UserConfig = ClientConfig;

/**
 * Generate the OpenAPI client. This method will read the OpenAPI specification and based on the
 * given language it will generate the client, including the typed models, validation schemas,
 * service layer, etc.
 * @param userConfig {@link UserConfig} passed to the `createClient()` method
 */
declare function createClient(userConfig: UserConfig): Promise<Client$1[]>;
/**
 * Type helper for openapi-ts.config.ts, returns {@link UserConfig} object
 */
declare function defineConfig(config: UserConfig): UserConfig;

export { type UserConfig, createClient, defineConfig };
