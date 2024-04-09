'use client';

import { Title } from '@/shared/ui/Title';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div>
			<Title>Что-то пошло не так...</Title>
			<button
				onClick={
					() => reset()
				}>
				Попробуйте еще раз
			</button>
		</div>
	);
}
