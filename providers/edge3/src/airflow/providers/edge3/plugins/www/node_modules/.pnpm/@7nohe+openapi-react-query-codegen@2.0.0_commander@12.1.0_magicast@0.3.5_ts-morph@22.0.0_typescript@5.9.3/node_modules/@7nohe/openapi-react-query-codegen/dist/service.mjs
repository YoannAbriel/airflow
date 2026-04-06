import ts from "typescript";
import { serviceFileName } from "./constants.mjs";
export async function getServices(project) {
    const node = project
        .getSourceFiles()
        .find((sourceFile) => sourceFile.getFilePath().includes(serviceFileName));
    if (!node) {
        throw new Error("No service node found");
    }
    const methods = getMethodsFromService(node);
    return {
        methods,
        node,
    };
}
export function getMethodsFromService(node) {
    const variableStatements = node.getVariableStatements();
    // The first variable statement is `const client = createClient(createConfig())`, so we skip it
    return variableStatements.splice(1).flatMap((variableStatement) => {
        const declarations = variableStatement.getDeclarations();
        return declarations.map((declaration) => {
            if (!ts.isVariableDeclaration(declaration.compilerNode)) {
                throw new Error("Variable declaration not found");
            }
            const initializer = declaration.getInitializer();
            if (!initializer) {
                throw new Error("Initializer not found");
            }
            if (!ts.isArrowFunction(initializer.compilerNode)) {
                throw new Error("Arrow function not found");
            }
            const methodBlockNode = initializer.compilerNode.body;
            if (!methodBlockNode || !ts.isBlock(methodBlockNode)) {
                throw new Error("Method block not found");
            }
            const foundReturnStatement = methodBlockNode.statements.find((s) => s.kind === ts.SyntaxKind.ReturnStatement);
            if (!foundReturnStatement) {
                throw new Error("Return statement not found");
            }
            const returnStatement = foundReturnStatement;
            const foundCallExpression = returnStatement.expression;
            if (!foundCallExpression) {
                throw new Error("Call expression not found");
            }
            const callExpression = foundCallExpression;
            const propertyAccessExpression = callExpression.expression;
            const httpMethodName = propertyAccessExpression.name.getText();
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
            const children = getAllChildren(initializer.compilerNode);
            // get all JSDoc comments
            // this should be an array of 1 or 0
            const jsDocs = children
                .filter((c) => c.kind === ts.SyntaxKind.JSDoc)
                .map((c) => c.getText(node.compilerNode));
            // get the first JSDoc comment
            const jsDoc = jsDocs?.[0];
            const isDeprecated = children.some((c) => c.kind === ts.SyntaxKind.JSDocDeprecatedTag);
            const methodDescription = {
                node,
                method: declaration,
                methodBlock: methodBlockNode,
                httpMethodName,
                jsDoc,
                isDeprecated,
            };
            return methodDescription;
        });
    });
}
