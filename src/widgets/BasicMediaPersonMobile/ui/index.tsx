import { getPerson } from '@/app/(main-root)/(page-id)/api/getPerson';

import { BasicSectionMobile } from '@/entities/BasicSectionMobile';

import { getGrowth } from '@/shared/helpers/getGrowth';
import { getProfessions } from '@/shared/helpers/getProfessions';
import { getZodiac } from '@/shared/helpers/getZodiac/getZodiac';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter/stringWithDelimiter';

import { getDatePersonString } from '../lib/getDatePersonString';

interface BasicMediaPersonMobileProps {
	className?: string;
	id: number;
}

export const BasicMediaPersonMobile = async ({
	className,
	id,
}: BasicMediaPersonMobileProps) => {
	const { name, enName, photo, profession, growth, birthday, age } =
		await getPerson(id);
	const professions = getProfessions(profession);
	const birthData = getDatePersonString(birthday, age);
	const growthArr = getGrowth(growth);
	const growthValue = growthArr ? `${growthArr[0]}.${growthArr[1]} м` : null;
	const zodiac = getZodiac(birthday);
	const thirdLine = stringWithDelimiter(' • ', [zodiac, growthValue]);

	return (
		<div className={className}>
			<BasicSectionMobile
				title={name}
				secondaryTitle={enName}
				poster={photo}
				metaInfo={[professions, birthData, thirdLine]}
			/>
		</div>
	);
};
