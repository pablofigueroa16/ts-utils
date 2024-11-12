import { describe, expect, it } from "vitest";

import { isObject } from "../isObject";

describe("isObject", () => {
	it("should return true if the value is an object", () => {
		expect(isObject({})).toBe(true);
	});
	it("should return false if the value is not an object", () => {
		expect(isObject(10)).toBe(false);
	});
	it("should return false if the value is true", () => {
		expect(isObject(true)).toBe(false);
	});
	it("should return false if the value is false", () => {
		expect(isObject(false)).toBe(false);
	});
	it("should return false if the value is null", () => {
		expect(isObject(null)).toBe(false);
	});
	it("should return false if the value is undefined", () => {
		expect(isObject(undefined)).toBe(false);
	});
	it("should return false if the value is a function", () => {
		expect(isObject(() => {})).toBe(false);
	});
});
