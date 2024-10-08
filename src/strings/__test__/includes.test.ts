import { describe, expect, it } from "vitest";
import { includes } from "../includes";

describe("includes", () => {
	it("should return true if the string includes the substring", () => {
		const result = includes("hello world", "world");
		expect(result).toBe(true);
	});
	it("should return false if the string does not include the substring", () => {
		const result = includes("hello world", "worlds");
		expect(result).toBe(false);
	});
	it("should return false if the string is null", () => {
		// @ts-expect-error - we are testing the function with a null value
		const result = includes(null, "world");
		expect(result).toBe(false);
	});
	it("should return false if the string is undefined", () => {
		// @ts-expect-error - we are testing the function with a string value
		const result = includes(undefined, "world");
		expect(result).toBe(false);
	});
	it("should return false if the substring is a number", () => {
		// @ts-expect-error - we are testing the function with a number value
		const result = includes("hello world", 10);
		expect(result).toBe(false);
	});
});
