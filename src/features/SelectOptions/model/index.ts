'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { createURLSearchParams } from '../lib/createURLSearchParams';

// ПОКА ОСТАВЛЮ ТАК, НА ВАЖНО ПОМНИТЬ, ЧТО ТЕПЕРЬ У МЕНЯ КОМПОНЕНТ BUTTON УДОБНЫЙ. Я МОГУ НАЗНАЧАТЬ НУЖНЫЙ ДЛЯ МЕНЯ КОМПОНЕНТ С СОХРАНЕНИЕМ НУЖНЫХ СТИЛЕЙ

export const useModel = () => {
	const router = useRouter();
	const params = useParams();
	const searchParams = useSearchParams();

	return (typeParam: string) => (value: string) => {
		router.push(
			`/lists/titles/${params.slug}${createURLSearchParams(
				searchParams,
				`${typeParam}`,
				`${value}`
			)}`
		);
	};
};
