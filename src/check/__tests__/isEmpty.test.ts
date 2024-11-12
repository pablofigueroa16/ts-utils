import { describe, expect, it } from "vitest";

import { isEmpty } from "../isEmpty";

describe("isEmpty", () => {
	it("should return true if the value is an empty object", () => {
		const result = isEmpty({});
		expect(result).toBe(true);
	});
	it("should return false if the value is not an empty object", () => {
		const result = isEmpty({ a: 1 });
		expect(result).toBe(false);
	});
	it("should return false if the value is not an empty array", () => {
		const result = isEmpty([1, 2]);
		expect(result).toBe(false);
	});
	it.each([
		{ value: null, results: true },
		{ value: undefined, results: true },
	])("should return $results if the value is $value", ({ value, results }) => {
		expect(isEmpty(value)).toBe(results);
	});
	it.each([
		{ value: 0, results: true },
		{ value: 1, results: true },
		{ value: -1, results: true },
		{ value: "", results: true },
		{ value: "a", results: true },
		{ value: true, results: true },
		{ value: false, results: true },
		{ value: Symbol(), results: true },
		{ value: new Date(), results: true },
		{ value: /a/, results: true },
		{ value: new Error(), results: true },
		{ value: [1, 2], results: false },
		{ value: { a: 1 }, results: false },
		{ value: new Map(), results: true },
		{ value: new Set(), results: true },
		{ value: new WeakMap(), results: true },
		{ value: new WeakSet(), results: true },
		{ value: new ArrayBuffer(2), results: true },
		{ value: new SharedArrayBuffer(2), results: true },
		{ value: new Int8Array(), results: true },
		{ value: new Uint8Array(), results: true },
		{ value: new Uint8ClampedArray(), results: true },
		{ value: new Int16Array(), results: true },
		{ value: new Uint16Array(), results: true },
		{ value: new Int32Array(), results: true },
		{ value: new Uint32Array(), results: true },
		{ value: new Float32Array(), results: true },
		{ value: new Float64Array(), results: true },
		{ value: new BigInt64Array(), results: true },
		{ value: new BigUint64Array(), results: true },
		{ value: new DataView(new ArrayBuffer(2)), results: true },
	])("should return $results if the value is $value", ({ value, results }) => {
		expect(isEmpty(value)).toBe(results);
	});
});
