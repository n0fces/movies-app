'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

import { createURLSearchParams } from '../lib/createURLSearchParams';

export const useModel = () => {
	const router = useRouter();
	const params = useParams();
	const searchParams = useSearchParams();

	const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

	return (typeParam: string) => (value: string) => {
		router.push(
			`/lists/titles/${slug}${createURLSearchParams(
				searchParams,
				typeParam,
				value,
			)}`,
		);
	};
};
