import type { AnyFunction } from "@/types";

export function debounce<T extends AnyFunction>(
	fn: T,
	delay = 200,
): (...args: Parameters<T>) => void {
	let timeoutId: NodeJS.Timeout | undefined;
	return function debouncedFn(...args: Parameters<T>) {
		if (timeoutId !== undefined) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			timeoutId = undefined;
			return fn(...args);
		}, delay);
	};
}
