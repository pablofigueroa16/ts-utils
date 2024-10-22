import type { AnyFunction } from "../types";
export function throttle<T extends AnyFunction>(
	fn: T,
	delay = 500,
): (...args: Parameters<T>) => void {
	let timeOutId: ReturnType<typeof setTimeout> | undefined;
	return function throttledFn(...args: Parameters<T>) {
		if (timeOutId !== undefined) {
			return;
		}
		timeOutId = setTimeout(() => {
			timeOutId = undefined;
		}, delay);
		return fn(...args);
	};
}
