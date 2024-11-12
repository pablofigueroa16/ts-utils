import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import { debounce } from "../debounce";

describe("debounce", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterAll(() => {
		vi.resetAllMocks();
	});
	it("should no execute the function", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);
		debouncedFn();
		debouncedFn();
		debouncedFn();
		expect(fn).not.toHaveBeenCalled();
	});
	it("should debounce the function and execute it after the delay", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 200);
		debouncedFn();
		debouncedFn();
		vi.advanceTimersByTime(200);
		debouncedFn();
		expect(fn).toHaveBeenCalledTimes(1);
	});
	it("should no debounce the function if the delay is undefined", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, undefined);
		debouncedFn();
		debouncedFn();
		vi.advanceTimersByTime(100);
		expect(fn).toHaveBeenCalledTimes(0);
	});
	it("should debounce the function and no execute it after the default delay", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn);
		debouncedFn();
		debouncedFn();
		vi.advanceTimersByTime(200);
		debouncedFn();
		expect(fn).toHaveBeenCalledTimes(1);
	});
	it("should execute the function only once if called multiple times within delay", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 100);

		debouncedFn();
		debouncedFn();
		vi.advanceTimersByTime(100);

		expect(fn).toHaveBeenCalledTimes(1);
	});

	it("should not execute the function if not called again after clearing timeout", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 100);

		debouncedFn();
		vi.advanceTimersByTime(50);
		debouncedFn();

		vi.advanceTimersByTime(50);

		expect(fn).toHaveBeenCalledTimes(0);

		vi.advanceTimersByTime(100);
		expect(fn).toHaveBeenCalledTimes(1);
	});

	it("should not call clearTimeout if debounce is called once and delay time has passed", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 100);

		debouncedFn();
		vi.advanceTimersByTime(100);

		expect(fn).toHaveBeenCalledTimes(1);

		debouncedFn();
		vi.advanceTimersByTime(100);
		expect(fn).toHaveBeenCalledTimes(2);
	});

	it("should only call clearTimeout when debounce is called again within delay", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 100);

		debouncedFn();
		vi.advanceTimersByTime(50);

		debouncedFn();
		expect(fn).toHaveBeenCalledTimes(0);

		vi.advanceTimersByTime(100);
		expect(fn).toHaveBeenCalledTimes(1);
	});
	it("should call clearTimeout when debounce is called multiple times", () => {
		const fn = vi.fn();
		const debouncedFn = debounce(fn, 100);

		debouncedFn();
		vi.advanceTimersByTime(50);

		expect(fn).not.toHaveBeenCalled();

		vi.advanceTimersByTime(50);
		expect(fn).toHaveBeenCalledTimes(1);
	});
});
