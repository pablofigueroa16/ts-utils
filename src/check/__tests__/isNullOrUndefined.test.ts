import { expect, it, describe } from "vitest";

import { isNullOrUndefined } from "../isNullOrUndefined";

describe("isNullOrUndefined", () => {
	it.each([
		{ value: null, results: true },
		{ value: undefined, results: true },
	])("should return $results if the value is $value", ({ value, results }) => {
		expect(isNullOrUndefined(value)).toBe(results);
	});
});
