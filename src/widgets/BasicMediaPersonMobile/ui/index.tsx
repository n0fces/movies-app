import { getPerson } from '@/app/(page-id)/api/getPerson';
import { BasicSectionMobile } from '@/entities/BasicSectionMobile';
import { getGrowth } from '@/shared/helpers/getGrowth';
import { getProfessions } from '@/shared/helpers/getProfessions';
import { getZodiac } from '@/shared/helpers/getZodiac';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { clsx } from 'clsx';
import { getDatePersonString } from '../lib/getDatePersonString';
import styles from './styles.module.scss';

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
		<div className={clsx(styles.basicMediaPersonMobile, className)}>
			<BasicSectionMobile
				title={name}
				secondaryTitle={enName}
				poster={photo}
				metaInfo={[professions, birthData, thirdLine]}
				className={styles.basicSection}
			/>
		</div>
	);
};
