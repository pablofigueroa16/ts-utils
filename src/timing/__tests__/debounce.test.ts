import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import { debounce } from "../debounce";

describe("debounce", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterAll(() => {
		vi.resetAllMocks();
	});
	it("debe llamar a la función después del retraso especificado", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);

		vi.useFakeTimers();

		debouncedFn();
		expect(fn).not.toHaveBeenCalled();

		vi.advanceTimersByTime(200);
		expect(fn).toHaveBeenCalledOnce();

		vi.useRealTimers();
	});

	it("debe cancelar la ejecución anterior si se llama nuevamente antes del retraso", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);

		vi.useFakeTimers();

		debouncedFn();
		vi.advanceTimersByTime(100);
		debouncedFn();
		vi.advanceTimersByTime(100);
		expect(fn).not.toHaveBeenCalled();

		vi.advanceTimersByTime(100);
		expect(fn).toHaveBeenCalledOnce();

		vi.useRealTimers();
	});

	it("debe pasar los argumentos correctos a la función original", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);

		vi.useFakeTimers();

		debouncedFn("argumento1", 42);
		vi.advanceTimersByTime(200);
		expect(fn).toHaveBeenCalledWith("argumento1", 42);

		vi.useRealTimers();
	});

	it("no debe llamar a la función si no se espera el tiempo suficiente", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);

		vi.useFakeTimers();

		debouncedFn();
		vi.advanceTimersByTime(199);
		expect(fn).not.toHaveBeenCalled();

		vi.useRealTimers();
	});

	it("debe permitir múltiples llamadas consecutivas correctamente", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);

		vi.useFakeTimers();

		debouncedFn();
		vi.advanceTimersByTime(200);
		expect(fn).toHaveBeenCalledTimes(1);

		debouncedFn();
		vi.advanceTimersByTime(200);
		expect(fn).toHaveBeenCalledTimes(2);

		vi.useRealTimers();
	});

	it("debe manejar correctamente cuando la función es llamada después del retraso", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);

		vi.useFakeTimers();

		debouncedFn();
		vi.advanceTimersByTime(200);
		debouncedFn();
		vi.advanceTimersByTime(200);

		expect(fn).toHaveBeenCalledTimes(2);

		vi.useRealTimers();
	});
	it("no debe llamar a clearTimeout si timeoutId no está definido", () => {
		const clearTimeoutMock = vi.spyOn(global, "clearTimeout");
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);

		vi.useFakeTimers();

		debouncedFn();

		expect(clearTimeoutMock).toHaveBeenCalledTimes(0);

		vi.useRealTimers();
		clearTimeoutMock.mockRestore();
	});
});
