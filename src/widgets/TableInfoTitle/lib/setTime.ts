import { convertMinutes } from '@/shared/helpers/convertMinutes';

export const setTime = (min: number | null | undefined) => {
	const time = convertMinutes(min);
	if (time) {
		const [hours, minutes] = time;
		if (hours) {
			return `${min} мин. / ${
				Number(hours) > 9 ? `0${hours}` : hours
			}:${minutes}`;
		} else {
			return `${min} мин`;
		}
	}
};
