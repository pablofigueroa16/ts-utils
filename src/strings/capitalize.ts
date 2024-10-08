import { isString } from "@/check";

export const capitalize = (string: string): string => {
	if (!isString(string)) {
		return string;
	}
	const splitString = string.split(" ");
	return splitString
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};
