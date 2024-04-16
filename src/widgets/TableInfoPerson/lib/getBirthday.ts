export const getBirthday = (birthday: string | null | undefined) => {
	if (birthday) {
		const fullDate = new Date(birthday);
		const day = fullDate.getDate();
		const month = fullDate.getMonth();
		const year = fullDate.getFullYear();
		return { day, month, year, fullDate };
	}
};
