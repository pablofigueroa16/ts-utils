import { describe, expect, it } from "vitest";
import { map } from "../map";

describe("map function", () => {
	it("should map numbers to their squares", () => {
		const input = [1, 2, 3, 4];
		const output = map(input, (num) => num * num);
		expect(output).toEqual([1, 4, 9, 16]);
	});

	it("should map strings to their lengths", () => {
		const input = ["apple", "banana", "cherry"];
		const output = map(input, (str) => str.length);
		expect(output).toEqual([5, 6, 6]);
	});

	it("should return an empty array when input is empty", () => {
		const input: number[] = [];
		const output = map(input, (num) => num * 2);
		expect(output).toEqual([]);
	});

	it("should handle mapping objects", () => {
		const input = [{ name: "Alice" }, { name: "Bob" }];
		const output = map(input, (obj) => obj.name);
		expect(output).toEqual(["Alice", "Bob"]);
	});

	it("should work with different types", () => {
		const input = [1, "two", true];
		const output = map(input, (element) => String(element));
		expect(output).toEqual(["1", "two", "true"]);
	});
});
