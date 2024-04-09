'use client'

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { createURLSearchParams } from '../lib/createURLSearchParams';

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
