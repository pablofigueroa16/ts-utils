import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import { throttle } from "../throttle";

describe("throttle", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});
	afterAll(() => {
		vi.resetAllMocks();
	});
	it("should throttle the function", () => {
		const fn = vi.fn();
		const throttledFn = throttle(fn, 200);
		throttledFn();
		throttledFn();
		expect(fn).toHaveBeenCalledTimes(1);
		vi.advanceTimersByTime(300);
		throttledFn();
		throttledFn();
		expect(fn).toHaveBeenCalledTimes(2);
	});
});
