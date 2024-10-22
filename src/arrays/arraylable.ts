export function arraylable<T>(value: T[] | null): T[] {
	return Array.isArray(value) ? value : [];
}
