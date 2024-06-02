import { api } from '@/shared/api';
import { cache } from 'react';
import { PersonLoaded } from '../ui/LinkItemPerson';

export const getPerson = cache(async (id: number) => {
	// * надо что-то подумать насчет организации кода
	// * сейчас у меня эта функция написана дважды. Различия только в передаваемом интерфейсе
	const { data } = await api.get<PersonLoaded>(`v1.4/person/${id}`);
	return data;
});
