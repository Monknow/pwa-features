export const round = (number, decimals = 2) => {
	const tenBase = 10 * decimals;

	return Math.round(number * tenBase) / tenBase;
};
