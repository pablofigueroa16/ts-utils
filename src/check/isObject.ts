export function isObject(value: unknown): value is object {
	return (
		typeof value === "object" &&
		value !== null &&
		!Array.isArray(value) &&
		!(value instanceof Date) &&
		!(value instanceof RegExp)
	);
}
