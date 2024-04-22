export const getGrowth = (growth: number | null | undefined) => {
	if (growth) {
		const m = Math.floor(growth / 100);
		const cm = growth % 100;
		return [m, cm];
	}
};
