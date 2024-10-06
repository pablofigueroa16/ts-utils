export function isEmpty(value: unknown): boolean {
	const isObject = value instanceof Object;
	if (!isObject) return true;
	return Object.entries(value).length === 0;
}
