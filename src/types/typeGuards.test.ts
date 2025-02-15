import * as ts from "typescript";
import { describe, expect, it } from "vitest";

import { createSourceFileAndTypeChecker } from "../test/utils.js";
import {
	isConditionalType,
	isIntersectionType,
	isLiteralType,
	isObjectType,
	isTupleType,
	isTupleTypeReference,
	isTypeReference,
	isUnionOrIntersectionType,
	isUnionType,
	isUniqueESSymbolType,
} from "./typeGuards.js";

function getTypeForTypeNode(sourceText: string) {
	const { sourceFile, typeChecker } =
		createSourceFileAndTypeChecker(sourceText);
	const node = sourceFile.statements.at(-1) as ts.TypeAliasDeclaration;

	return typeChecker.getTypeAtLocation(node);
}

function getTypeForVariable(sourceText: string) {
	const { sourceFile, typeChecker } =
		createSourceFileAndTypeChecker(sourceText);
	const node = sourceFile.statements.at(-1) as ts.VariableStatement;

	return typeChecker.getTypeAtLocation(
		node.declarationList.declarations[0].name
	);
}

describe("isConditionalType", () => {
	it.each([
		[false, "type Test = 1;"],
		[true, "type Test<T> = T extends 1 ? 2 : 3;"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isConditionalType(type)).toBe(expected);
	});
});

describe("isIntersectionType", () => {
	it.each([
		[false, "type Test = 1;"],
		[true, "type Test<T> = T & 1"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isIntersectionType(type)).toBe(expected);
	});
});

describe("isLiteralType", () => {
	it.each([
		[false, "type Test = [];"],
		[true, "type Test = 1;"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isLiteralType(type)).toBe(expected);
	});
});

describe("isObjectType", () => {
	it.each([
		[false, "type Test = 1;"],
		[true, "type Test = {};"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isObjectType(type)).toBe(expected);
	});
});

describe("isUnionOrIntersectionType", () => {
	it.each([
		[false, "type Test = 1;"],
		[true, "type Test<T> = T | {};"],
		[true, "type Test<T> = T & {};"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isUnionOrIntersectionType(type)).toBe(expected);
	});
});

describe("isUniqueESSymbolType", () => {
	it.each([
		[false, "declare const test: 1;"],
		[true, "declare const test: unique symbol"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForVariable(sourceText);

		expect(isUniqueESSymbolType(type)).toBe(expected);
	});
});

describe("isUnionType", () => {
	it.each([
		[false, "type Test<T> = T & {};"],
		[true, "type Test<T> = T | {};"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isUnionType(type)).toBe(expected);
	});
});

describe("isTupleType", () => {
	it.each([
		[false, "type Test = {};"],
		[false, "type Test = string[];"],
		[true, "type Test = [];"],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isTupleType(type)).toBe(expected);
	});
});

describe("isTupleTypeReference", () => {
	it.each([
		[false, "type Test = string[];"],
		[false, "type Test = 1[];"],
		[
			true,
			`
                type Data = [];
                type Test = [Data];
            `,
		],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isTupleTypeReference(type)).toBe(expected);
	});
});

describe("isTypeReference", () => {
	it.each([
		[false, "type Test = string;"],
		[false, "type Test = 1;"],
		[
			true,
			`
                type Data = [];
                type Test = Data;
            `,
		],
	])("returns %j when given %s", (expected, sourceText) => {
		const type = getTypeForTypeNode(sourceText);

		expect(isTypeReference(type)).toBe(expected);
	});
});
