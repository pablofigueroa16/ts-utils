import { describe, expect, it } from "vitest";
import { capitalize } from "../capitalize";

describe("capitalize", () => {
	it("should capitalize the first letter of each word in the string", () => {
		const result = capitalize("hello world");
		expect(result).toBe("Hello World");
	});
	it("should return the original string if it is not a string", () => {
		// @ts-expect-error - we are testing the function with a number value
		const result = capitalize(10);
		expect(result).toBe(10);
	});
	it("should return the original string if it is an empty string", () => {
		const result = capitalize("");
		expect(result).toBe("");
	});
	it("should return the original string if it is null", () => {
		// @ts-expect-error - we are testing the function with a null value
		const result = capitalize(null);
		expect(result).toBe(null);
	});
	it("should return the original string if it is undefined", () => {
		// @ts-expect-error - we are testing the function with a string value
		const result = capitalize(undefined);
		expect(result).toBe(undefined);
	});
	it("should return the original string if it is an empty string", () => {
		const result = capitalize("");
		expect(result).toBe("");
	});
	it("should return the original object if it is a object", () => {
		// @ts-expect-error - we are testing the function with a object value
		const result = capitalize({});
		expect(result).toEqual({});
	});
});
