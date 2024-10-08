import { describe, expect, it } from "vitest";

import { isObject } from "../isObject";

describe("isObject", () => {
	it("should return true if the value is an object", () => {
		expect(isObject({})).toBe(true);
	});
	it("should return false if the value is not an object", () => {
		expect(isObject(10)).toBe(false);
	});
});
