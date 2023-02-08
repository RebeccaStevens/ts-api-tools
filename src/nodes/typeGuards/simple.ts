// Code largely based on https://github.com/ajafff/tsutils
// Original license: https://github.com/ajafff/tsutils/blob/26b195358ec36d59f00333115aa3ffd9611ca78b/LICENSE

import * as ts from "typescript";

export function isArrayBindingPattern(
	node: ts.Node
): node is ts.ArrayBindingPattern {
	return node.kind === ts.SyntaxKind.ArrayBindingPattern;
}

export function isArrayLiteralExpression(
	node: ts.Node
): node is ts.ArrayLiteralExpression {
	return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
}

export function isArrayTypeNode(node: ts.Node): node is ts.ArrayTypeNode {
	return node.kind === ts.SyntaxKind.ArrayType;
}

export function isArrowFunction(node: ts.Node): node is ts.ArrowFunction {
	return node.kind === ts.SyntaxKind.ArrowFunction;
}

export function isAsExpression(node: ts.Node): node is ts.AsExpression {
	return node.kind === ts.SyntaxKind.AsExpression;
}

export function isAwaitExpression(node: ts.Node): node is ts.AwaitExpression {
	return node.kind === ts.SyntaxKind.AwaitExpression;
}

export function isBigIntLiteral(node: ts.Node): node is ts.BigIntLiteral {
	return node.kind === ts.SyntaxKind.BigIntLiteral;
}

export function isBinaryExpression(node: ts.Node): node is ts.BinaryExpression {
	return node.kind === ts.SyntaxKind.BinaryExpression;
}

export function isBindingElement(node: ts.Node): node is ts.BindingElement {
	return node.kind === ts.SyntaxKind.BindingElement;
}

export function isBlock(node: ts.Node): node is ts.Block {
	return node.kind === ts.SyntaxKind.Block;
}

export function isBreakStatement(node: ts.Node): node is ts.BreakStatement {
	return node.kind === ts.SyntaxKind.BreakStatement;
}

export function isCallExpression(node: ts.Node): node is ts.CallExpression {
	return node.kind === ts.SyntaxKind.CallExpression;
}

export function isCallSignatureDeclaration(
	node: ts.Node
): node is ts.CallSignatureDeclaration {
	return node.kind === ts.SyntaxKind.CallSignature;
}

export function isCaseBlock(node: ts.Node): node is ts.CaseBlock {
	return node.kind === ts.SyntaxKind.CaseBlock;
}

export function isCaseClause(node: ts.Node): node is ts.CaseClause {
	return node.kind === ts.SyntaxKind.CaseClause;
}

export function isCatchClause(node: ts.Node): node is ts.CatchClause {
	return node.kind === ts.SyntaxKind.CatchClause;
}

export function isClassDeclaration(node: ts.Node): node is ts.ClassDeclaration {
	return node.kind === ts.SyntaxKind.ClassDeclaration;
}

export function isClassExpression(node: ts.Node): node is ts.ClassExpression {
	return node.kind === ts.SyntaxKind.ClassExpression;
}

export function isCommaListExpression(
	node: ts.Node
): node is ts.CommaListExpression {
	return node.kind === ts.SyntaxKind.CommaListExpression;
}

export function isConditionalExpression(
	node: ts.Node
): node is ts.ConditionalExpression {
	return node.kind === ts.SyntaxKind.ConditionalExpression;
}

export function isConditionalTypeNode(
	node: ts.Node
): node is ts.ConditionalTypeNode {
	return node.kind === ts.SyntaxKind.ConditionalType;
}

export function isConstructorDeclaration(
	node: ts.Node
): node is ts.ConstructorDeclaration {
	return node.kind === ts.SyntaxKind.Constructor;
}

export function isConstructorTypeNode(
	node: ts.Node
): node is ts.ConstructorTypeNode {
	return node.kind === ts.SyntaxKind.ConstructorType;
}

export function isConstructSignatureDeclaration(
	node: ts.Node
): node is ts.ConstructSignatureDeclaration {
	return node.kind === ts.SyntaxKind.ConstructSignature;
}

export function isContinueStatement(
	node: ts.Node
): node is ts.ContinueStatement {
	return node.kind === ts.SyntaxKind.ContinueStatement;
}

export function isComputedPropertyName(
	node: ts.Node
): node is ts.ComputedPropertyName {
	return node.kind === ts.SyntaxKind.ComputedPropertyName;
}

export function isDebuggerStatement(
	node: ts.Node
): node is ts.DebuggerStatement {
	return node.kind === ts.SyntaxKind.DebuggerStatement;
}

export function isDecorator(node: ts.Node): node is ts.Decorator {
	return node.kind === ts.SyntaxKind.Decorator;
}

export function isDefaultClause(node: ts.Node): node is ts.DefaultClause {
	return node.kind === ts.SyntaxKind.DefaultClause;
}

export function isDeleteExpression(node: ts.Node): node is ts.DeleteExpression {
	return node.kind === ts.SyntaxKind.DeleteExpression;
}

export function isDoStatement(node: ts.Node): node is ts.DoStatement {
	return node.kind === ts.SyntaxKind.DoStatement;
}

export function isElementAccessExpression(
	node: ts.Node
): node is ts.ElementAccessExpression {
	return node.kind === ts.SyntaxKind.ElementAccessExpression;
}

export function isEmptyStatement(node: ts.Node): node is ts.EmptyStatement {
	return node.kind === ts.SyntaxKind.EmptyStatement;
}

export function isEntityName(node: ts.Node): node is ts.EntityName {
	return node.kind === ts.SyntaxKind.Identifier || isQualifiedName(node);
}

export function isEnumDeclaration(node: ts.Node): node is ts.EnumDeclaration {
	return node.kind === ts.SyntaxKind.EnumDeclaration;
}

export function isEnumMember(node: ts.Node): node is ts.EnumMember {
	return node.kind === ts.SyntaxKind.EnumMember;
}

export function isExportAssignment(node: ts.Node): node is ts.ExportAssignment {
	return node.kind === ts.SyntaxKind.ExportAssignment;
}

export function isExportDeclaration(
	node: ts.Node
): node is ts.ExportDeclaration {
	return node.kind === ts.SyntaxKind.ExportDeclaration;
}

export function isExportSpecifier(node: ts.Node): node is ts.ExportSpecifier {
	return node.kind === ts.SyntaxKind.ExportSpecifier;
}

export function isExpressionStatement(
	node: ts.Node
): node is ts.ExpressionStatement {
	return node.kind === ts.SyntaxKind.ExpressionStatement;
}

export function isExpressionWithTypeArguments(
	node: ts.Node
): node is ts.ExpressionWithTypeArguments {
	return node.kind === ts.SyntaxKind.ExpressionWithTypeArguments;
}

export function isExternalModuleReference(
	node: ts.Node
): node is ts.ExternalModuleReference {
	return node.kind === ts.SyntaxKind.ExternalModuleReference;
}

export function isForInStatement(node: ts.Node): node is ts.ForInStatement {
	return node.kind === ts.SyntaxKind.ForInStatement;
}

export function isForOfStatement(node: ts.Node): node is ts.ForOfStatement {
	return node.kind === ts.SyntaxKind.ForOfStatement;
}

export function isForStatement(node: ts.Node): node is ts.ForStatement {
	return node.kind === ts.SyntaxKind.ForStatement;
}

export function isFunctionDeclaration(
	node: ts.Node
): node is ts.FunctionDeclaration {
	return node.kind === ts.SyntaxKind.FunctionDeclaration;
}

export function isFunctionExpression(
	node: ts.Node
): node is ts.FunctionExpression {
	return node.kind === ts.SyntaxKind.FunctionExpression;
}

export function isFunctionTypeNode(node: ts.Node): node is ts.FunctionTypeNode {
	return node.kind === ts.SyntaxKind.FunctionType;
}

export function isGetAccessorDeclaration(
	node: ts.Node
): node is ts.GetAccessorDeclaration {
	return node.kind === ts.SyntaxKind.GetAccessor;
}

export function isIdentifier(node: ts.Node): node is ts.Identifier {
	return node.kind === ts.SyntaxKind.Identifier;
}

export function isIfStatement(node: ts.Node): node is ts.IfStatement {
	return node.kind === ts.SyntaxKind.IfStatement;
}

export function isImportClause(node: ts.Node): node is ts.ImportClause {
	return node.kind === ts.SyntaxKind.ImportClause;
}

export function isImportDeclaration(
	node: ts.Node
): node is ts.ImportDeclaration {
	return node.kind === ts.SyntaxKind.ImportDeclaration;
}

export function isImportEqualsDeclaration(
	node: ts.Node
): node is ts.ImportEqualsDeclaration {
	return node.kind === ts.SyntaxKind.ImportEqualsDeclaration;
}

export function isImportSpecifier(node: ts.Node): node is ts.ImportSpecifier {
	return node.kind === ts.SyntaxKind.ImportSpecifier;
}

export function isImportTypeNode(node: ts.Node): node is ts.ImportTypeNode {
	return node.kind === ts.SyntaxKind.ImportType;
}

export function isIndexedAccessTypeNode(
	node: ts.Node
): node is ts.IndexedAccessTypeNode {
	return node.kind === ts.SyntaxKind.IndexedAccessType;
}

export function isIndexSignatureDeclaration(
	node: ts.Node
): node is ts.IndexSignatureDeclaration {
	return node.kind === ts.SyntaxKind.IndexSignature;
}

export function isInferTypeNode(node: ts.Node): node is ts.InferTypeNode {
	return node.kind === ts.SyntaxKind.InferType;
}

export function isInterfaceDeclaration(
	node: ts.Node
): node is ts.InterfaceDeclaration {
	return node.kind === ts.SyntaxKind.InterfaceDeclaration;
}

export function isIntersectionTypeNode(
	node: ts.Node
): node is ts.IntersectionTypeNode {
	return node.kind === ts.SyntaxKind.IntersectionType;
}

export function isJsDoc(node: ts.Node): node is ts.JSDoc {
	return node.kind === ts.SyntaxKind.JSDoc;
}

export function isJsxAttribute(node: ts.Node): node is ts.JsxAttribute {
	return node.kind === ts.SyntaxKind.JsxAttribute;
}

export function isJsxAttributes(node: ts.Node): node is ts.JsxAttributes {
	return node.kind === ts.SyntaxKind.JsxAttributes;
}

export function isJsxClosingElement(
	node: ts.Node
): node is ts.JsxClosingElement {
	return node.kind === ts.SyntaxKind.JsxClosingElement;
}

export function isJsxClosingFragment(
	node: ts.Node
): node is ts.JsxClosingFragment {
	return node.kind === ts.SyntaxKind.JsxClosingFragment;
}

export function isJsxElement(node: ts.Node): node is ts.JsxElement {
	return node.kind === ts.SyntaxKind.JsxElement;
}

export function isJsxExpression(node: ts.Node): node is ts.JsxExpression {
	return node.kind === ts.SyntaxKind.JsxExpression;
}

export function isJsxFragment(node: ts.Node): node is ts.JsxFragment {
	return node.kind === ts.SyntaxKind.JsxFragment;
}

export function isJsxOpeningElement(
	node: ts.Node
): node is ts.JsxOpeningElement {
	return node.kind === ts.SyntaxKind.JsxOpeningElement;
}

export function isJsxOpeningFragment(
	node: ts.Node
): node is ts.JsxOpeningFragment {
	return node.kind === ts.SyntaxKind.JsxOpeningFragment;
}

export function isJsxSelfClosingElement(
	node: ts.Node
): node is ts.JsxSelfClosingElement {
	return node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}

export function isJsxSpreadAttribute(
	node: ts.Node
): node is ts.JsxSpreadAttribute {
	return node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}

export function isJsxText(node: ts.Node): node is ts.JsxText {
	return node.kind === ts.SyntaxKind.JsxText;
}

export function isLabeledStatement(node: ts.Node): node is ts.LabeledStatement {
	return node.kind === ts.SyntaxKind.LabeledStatement;
}

export function isLiteralTypeNode(node: ts.Node): node is ts.LiteralTypeNode {
	return node.kind === ts.SyntaxKind.LiteralType;
}

export function isMappedTypeNode(node: ts.Node): node is ts.MappedTypeNode {
	return node.kind === ts.SyntaxKind.MappedType;
}

export function isMetaProperty(node: ts.Node): node is ts.MetaProperty {
	return node.kind === ts.SyntaxKind.MetaProperty;
}

export function isMethodDeclaration(
	node: ts.Node
): node is ts.MethodDeclaration {
	return node.kind === ts.SyntaxKind.MethodDeclaration;
}

export function isMethodSignature(node: ts.Node): node is ts.MethodSignature {
	return node.kind === ts.SyntaxKind.MethodSignature;
}

export function isModuleBlock(node: ts.Node): node is ts.ModuleBlock {
	return node.kind === ts.SyntaxKind.ModuleBlock;
}

export function isModuleDeclaration(
	node: ts.Node
): node is ts.ModuleDeclaration {
	return node.kind === ts.SyntaxKind.ModuleDeclaration;
}

export function isNamedExports(node: ts.Node): node is ts.NamedExports {
	return node.kind === ts.SyntaxKind.NamedExports;
}

export function isNamedImports(node: ts.Node): node is ts.NamedImports {
	return node.kind === ts.SyntaxKind.NamedImports;
}

export function isNamespaceImport(node: ts.Node): node is ts.NamespaceImport {
	return node.kind === ts.SyntaxKind.NamespaceImport;
}

export function isNamespaceExportDeclaration(
	node: ts.Node
): node is ts.NamespaceExportDeclaration {
	return node.kind === ts.SyntaxKind.NamespaceExportDeclaration;
}

export function isNewExpression(node: ts.Node): node is ts.NewExpression {
	return node.kind === ts.SyntaxKind.NewExpression;
}

export function isNonNullExpression(
	node: ts.Node
): node is ts.NonNullExpression {
	return node.kind === ts.SyntaxKind.NonNullExpression;
}

export function isNoSubstitutionTemplateLiteral(
	node: ts.Node
): node is ts.NoSubstitutionTemplateLiteral {
	return node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}

export function isNullLiteral(node: ts.Node): node is ts.NullLiteral {
	return node.kind === ts.SyntaxKind.NullKeyword;
}

export function isNumericLiteral(node: ts.Node): node is ts.NumericLiteral {
	return node.kind === ts.SyntaxKind.NumericLiteral;
}

export function isObjectBindingPattern(
	node: ts.Node
): node is ts.ObjectBindingPattern {
	return node.kind === ts.SyntaxKind.ObjectBindingPattern;
}

export function isObjectLiteralExpression(
	node: ts.Node
): node is ts.ObjectLiteralExpression {
	return node.kind === ts.SyntaxKind.ObjectLiteralExpression;
}

export function isOmittedExpression(
	node: ts.Node
): node is ts.OmittedExpression {
	return node.kind === ts.SyntaxKind.OmittedExpression;
}

export function isOptionalTypeNode(node: ts.Node): node is ts.OptionalTypeNode {
	return node.kind === ts.SyntaxKind.OptionalType;
}

export function isParameterDeclaration(
	node: ts.Node
): node is ts.ParameterDeclaration {
	return node.kind === ts.SyntaxKind.Parameter;
}

export function isParenthesizedExpression(
	node: ts.Node
): node is ts.ParenthesizedExpression {
	return node.kind === ts.SyntaxKind.ParenthesizedExpression;
}

export function isParenthesizedTypeNode(
	node: ts.Node
): node is ts.ParenthesizedTypeNode {
	return node.kind === ts.SyntaxKind.ParenthesizedType;
}

export function isPostfixUnaryExpression(
	node: ts.Node
): node is ts.PostfixUnaryExpression {
	return node.kind === ts.SyntaxKind.PostfixUnaryExpression;
}

export function isPrefixUnaryExpression(
	node: ts.Node
): node is ts.PrefixUnaryExpression {
	return node.kind === ts.SyntaxKind.PrefixUnaryExpression;
}

export function isPropertyAccessExpression(
	node: ts.Node
): node is ts.PropertyAccessExpression {
	return node.kind === ts.SyntaxKind.PropertyAccessExpression;
}

export function isPropertyAssignment(
	node: ts.Node
): node is ts.PropertyAssignment {
	return node.kind === ts.SyntaxKind.PropertyAssignment;
}

export function isPropertyDeclaration(
	node: ts.Node
): node is ts.PropertyDeclaration {
	return node.kind === ts.SyntaxKind.PropertyDeclaration;
}

export function isPropertySignature(
	node: ts.Node
): node is ts.PropertySignature {
	return node.kind === ts.SyntaxKind.PropertySignature;
}

export function isQualifiedName(node: ts.Node): node is ts.QualifiedName {
	return node.kind === ts.SyntaxKind.QualifiedName;
}

export function isRegularExpressionLiteral(
	node: ts.Node
): node is ts.RegularExpressionLiteral {
	return node.kind === ts.SyntaxKind.RegularExpressionLiteral;
}

export function isRestTypeNode(node: ts.Node): node is ts.RestTypeNode {
	return node.kind === ts.SyntaxKind.RestType;
}

export function isReturnStatement(node: ts.Node): node is ts.ReturnStatement {
	return node.kind === ts.SyntaxKind.ReturnStatement;
}

export function isSetAccessorDeclaration(
	node: ts.Node
): node is ts.SetAccessorDeclaration {
	return node.kind === ts.SyntaxKind.SetAccessor;
}

export function isShorthandPropertyAssignment(
	node: ts.Node
): node is ts.ShorthandPropertyAssignment {
	return node.kind === ts.SyntaxKind.ShorthandPropertyAssignment;
}

export function isSourceFile(node: ts.Node): node is ts.SourceFile {
	return node.kind === ts.SyntaxKind.SourceFile;
}

export function isSpreadAssignment(node: ts.Node): node is ts.SpreadAssignment {
	return node.kind === ts.SyntaxKind.SpreadAssignment;
}

export function isSpreadElement(node: ts.Node): node is ts.SpreadElement {
	return node.kind === ts.SyntaxKind.SpreadElement;
}

export function isStringLiteral(node: ts.Node): node is ts.StringLiteral {
	return node.kind === ts.SyntaxKind.StringLiteral;
}

export function isSwitchStatement(node: ts.Node): node is ts.SwitchStatement {
	return node.kind === ts.SyntaxKind.SwitchStatement;
}

export function isSyntaxList(node: ts.Node): node is ts.SyntaxList {
	return node.kind === ts.SyntaxKind.SyntaxList;
}

export function isSyntheticExpression(
	node: ts.Node
): node is ts.SyntheticExpression {
	return node.kind === ts.SyntaxKind.SyntheticExpression;
}

export function isTaggedTemplateExpression(
	node: ts.Node
): node is ts.TaggedTemplateExpression {
	return node.kind === ts.SyntaxKind.TaggedTemplateExpression;
}

export function isTemplateExpression(
	node: ts.Node
): node is ts.TemplateExpression {
	return node.kind === ts.SyntaxKind.TemplateExpression;
}

export function isThrowStatement(node: ts.Node): node is ts.ThrowStatement {
	return node.kind === ts.SyntaxKind.ThrowStatement;
}

export function isTryStatement(node: ts.Node): node is ts.TryStatement {
	return node.kind === ts.SyntaxKind.TryStatement;
}

export function isTupleTypeNode(node: ts.Node): node is ts.TupleTypeNode {
	return node.kind === ts.SyntaxKind.TupleType;
}

export function isTypeAliasDeclaration(
	node: ts.Node
): node is ts.TypeAliasDeclaration {
	return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
}

export function isTypeAssertion(node: ts.Node): node is ts.TypeAssertion {
	return node.kind === ts.SyntaxKind.TypeAssertionExpression;
}

export function isTypeLiteralNode(node: ts.Node): node is ts.TypeLiteralNode {
	return node.kind === ts.SyntaxKind.TypeLiteral;
}

export function isTypeOfExpression(node: ts.Node): node is ts.TypeOfExpression {
	return node.kind === ts.SyntaxKind.TypeOfExpression;
}

export function isTypeOperatorNode(node: ts.Node): node is ts.TypeOperatorNode {
	return node.kind === ts.SyntaxKind.TypeOperator;
}

export function isTypeParameterDeclaration(
	node: ts.Node
): node is ts.TypeParameterDeclaration {
	return node.kind === ts.SyntaxKind.TypeParameter;
}

export function isTypePredicateNode(
	node: ts.Node
): node is ts.TypePredicateNode {
	return node.kind === ts.SyntaxKind.TypePredicate;
}

export function isTypeReferenceNode(
	node: ts.Node
): node is ts.TypeReferenceNode {
	return node.kind === ts.SyntaxKind.TypeReference;
}

export function isTypeQueryNode(node: ts.Node): node is ts.TypeQueryNode {
	return node.kind === ts.SyntaxKind.TypeQuery;
}

export function isUnionTypeNode(node: ts.Node): node is ts.UnionTypeNode {
	return node.kind === ts.SyntaxKind.UnionType;
}

export function isVariableDeclaration(
	node: ts.Node
): node is ts.VariableDeclaration {
	return node.kind === ts.SyntaxKind.VariableDeclaration;
}

export function isVariableStatement(
	node: ts.Node
): node is ts.VariableStatement {
	return node.kind === ts.SyntaxKind.VariableStatement;
}

export function isVariableDeclarationList(
	node: ts.Node
): node is ts.VariableDeclarationList {
	return node.kind === ts.SyntaxKind.VariableDeclarationList;
}

export function isVoidExpression(node: ts.Node): node is ts.VoidExpression {
	return node.kind === ts.SyntaxKind.VoidExpression;
}

export function isWhileStatement(node: ts.Node): node is ts.WhileStatement {
	return node.kind === ts.SyntaxKind.WhileStatement;
}

export function isWithStatement(node: ts.Node): node is ts.WithStatement {
	return node.kind === ts.SyntaxKind.WithStatement;
}
