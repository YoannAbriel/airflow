import ts from "typescript";
import { getClassNameFromClassNode, getClassesFromService, } from "./common.mjs";
import { serviceFileName } from "./constants.mjs";
export async function getServices(project) {
    const node = project
        .getSourceFiles()
        .find((sourceFile) => sourceFile.getFilePath().includes(serviceFileName));
    if (!node) {
        throw new Error("No service node found");
    }
    const klasses = getClassesFromService(node);
    return {
        klasses: klasses.map(({ klass, className }) => ({
            className,
            klass,
            methods: getMethodsFromService(node, klass),
        })),
        node,
    };
}
function getMethodsFromService(node, klass) {
    const methods = klass.getMethods();
    if (!methods.length) {
        throw new Error("No methods found");
    }
    return methods.map((method) => {
        const methodBlockNode = method.compilerNode
            .getChildren(node.compilerNode)
            .find((child) => child.kind === ts.SyntaxKind.Block);
        if (!methodBlockNode) {
            throw new Error("Method block not found");
        }
        const methodBlock = methodBlockNode;
        const foundReturnStatement = methodBlock.statements.find((s) => s.kind === ts.SyntaxKind.ReturnStatement);
        if (!foundReturnStatement) {
            throw new Error("Return statement not found");
        }
        const returnStatement = foundReturnStatement;
        const foundCallExpression = returnStatement.expression;
        if (!foundCallExpression) {
            throw new Error("Call expression not found");
        }
        const callExpression = foundCallExpression;
        const properties = callExpression.arguments[1].properties;
        const httpMethodName = properties
            .find((p) => p.name?.getText(node.compilerNode) === "method")
            ?.initializer?.getText(node.compilerNode);
        if (!httpMethodName) {
            throw new Error("httpMethodName not found");
        }
        const getAllChildren = (tsNode) => {
            const childItems = tsNode.getChildren(node.compilerNode);
            if (childItems.length) {
                const allChildren = childItems.map(getAllChildren);
                return [tsNode].concat(allChildren.flat());
            }
            return [tsNode];
        };
        const children = getAllChildren(method.compilerNode);
        // get all JSDoc comments
        // this should be an array of 1 or 0
        const jsDocs = children
            .filter((c) => c.kind === ts.SyntaxKind.JSDoc)
            .map((c) => c.getText(node.compilerNode));
        // get the first JSDoc comment
        const jsDoc = jsDocs?.[0];
        const isDeprecated = children.some((c) => c.kind === ts.SyntaxKind.JSDocDeprecatedTag);
        const className = getClassNameFromClassNode(klass);
        return {
            className,
            node,
            method,
            methodBlock,
            httpMethodName,
            jsDoc,
            isDeprecated,
        };
    });
}
