import { describe, expect, it } from "vitest";

import { isNullOrUndefined } from "../isNullOrUndefined";

describe("isNullOrUndefined", () => {
	it.each([
		{ value: null, results: true },
		{ value: undefined, results: true },
		{ value: true, results: false },
	])("should return $results if the value is $value", ({ value, results }) => {
		expect(isNullOrUndefined(value)).toBe(results);
	});
});
