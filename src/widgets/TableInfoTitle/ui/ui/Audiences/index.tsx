import Link from 'next/link';

import { Audience } from '@/shared/types';
import { flags } from '@/shared/types/flags';

interface AudiencesProps {
	audience: Audience[] | null | undefined;
}

export const Audiences = ({ audience }: AudiencesProps) => {
	if (audience) {
		const audienceList = audience.slice(0, 3).map((item, index) => {
			const count =
				item.count >= 1000000
					? (item.count / 1000000).toFixed(1) + ' млн'
					: (item.count / 1000).toFixed(1) + ' тыс';
			return (
				<span key={item.country}>
					{Boolean(flags[item.country]) ? (
						<i className={`flag-${flags[item.country]}`}></i>
					) : (
						item.country
					)}{' '}
					{count}
					{index !== audience.length - 1 && ', '}
				</span>
			);
		});

		if (audience.length > 3) {
			audienceList.push(
				<>
					, <Link href={'#'}>...</Link>
				</>,
			);
		}

		return audienceList;
	}
	return null;
};
