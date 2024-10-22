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
});
