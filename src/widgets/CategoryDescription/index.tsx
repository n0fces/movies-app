import styles from './styles.module.scss';
import { MyImage } from '@/shared/ui/MyImage';
import { Title } from '@/shared/ui/Title';
import { clsx } from 'clsx';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { getCategory } from './api/getCategory';

interface DescriptionCategoryProps {
	params: { [key: string]: string };
}

export default async function CategoryDescription({
	params,
}: DescriptionCategoryProps) {
	const isMobile = deviceDetectServer();
	const { name, cover } = await getCategory(params.slug);
	return (
		<div
			className={clsx(styles.descriptionCategory, {
				[styles.column]: isMobile,
			})}>
			<div className={styles.description}>
				<Title
					as='h1'
					size='large'
					className={clsx(styles.categoryTitle, {
						[styles.center]: isMobile,
					})}>
					{name}
				</Title>
				{/* <div className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Esse sed illum modi debitis quidem in assumenda aliquid
					possimus explicabo dolore sint dignissimos minima adipisci
					dicta delectus praesentium magni repellat inventore fuga
					culpa maxime, quas a sunt. Ipsa sit temporibus eos.
				</div> */}
			</div>
			<MyImage
				className={styles.image}
				src={cover?.url}
				width={160}
				height={160}
				alt={name}
			/>
		</div>
	);
}
