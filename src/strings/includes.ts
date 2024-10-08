import { isString } from "@/check";

export const includes = (string: string, substring: string): boolean => {
	return isString(string) && isString(substring)
		? string.includes(substring)
		: false;
};
