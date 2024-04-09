export const convertMinutes = (min?: number | null) => {
	if (min) {
		const hours = Math.floor(min / 60);
		const minutes = min % 60 > 9 ? min % 60 : `0${min % 60}`;
		return [hours, minutes];
	}
};
