export const map = <T, U>(array: T[], fn: (element: T) => U): U[] => {
	return array.map(fn);
};
