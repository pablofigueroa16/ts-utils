import { describe, expect, it } from "vitest";
import { arraylable } from "./../arraylable";

describe("arraylable", () => {
	it("debería devolver el arreglo cuando se pasa un arreglo válido", () => {
		const input = [1, 2, 3];
		const result = arraylable(input);
		expect(result).toEqual(input);
	});

	it("debería devolver un arreglo vacío cuando se pasa null", () => {
		const result = arraylable(null);
		expect(result).toEqual([]);
	});

	it("debería devolver un arreglo vacío cuando se pasa un valor que no es un arreglo", () => {
		// @ts-expect-error necesary to test the function
		const result = arraylable("no soy un arreglo");
		expect(result).toEqual([]);
	});

	it("debería devolver un arreglo vacío cuando se pasa un objeto", () => {
		// @ts-expect-error necesary to test the function
		const result = arraylable({ key: "value" });
		expect(result).toEqual([]);
	});

	it("debería devolver un arreglo vacío cuando se pasa undefined", () => {
		// @ts-expect-error necesary to test the function
		const result = arraylable(undefined);
		expect(result).toEqual([]);
	});
});
