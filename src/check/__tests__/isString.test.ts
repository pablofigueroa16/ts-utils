import { describe, expect, it } from "vitest";
import { isString } from "../isString";
describe("isString", () => {
	it('should return true if the value is a "" string', () => {
		const result = isString("");
		expect(result).toBe(true);
	});
	it("should return false if the value is a number", () => {
		const result = isString(10);
		expect(result).toBe(false);
	});

	it("should return false if the value is a boolean", () => {
		const result = isString(true);
		expect(result).toBe(false);
	});
	it("should return false if the value is a null", () => {
		const result = isString(null);
		expect(result).toBe(false);
	});
	it("should return false if the value is a undefined", () => {
		const result = isString(undefined);
		expect(result).toBe(false);
	});
});
