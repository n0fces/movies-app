import { clsx } from 'clsx';
import Link from 'next/link';

import { Poster } from '@/entities/Poster';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { getPath } from '@/shared/helpers/getPath';
import { ListItemProps } from '@/shared/types';

import { ContentSlot } from './ContentSlot';
import styles from './styles.module.scss';

export interface ListItemPropsEx extends ListItemProps {
	watchItems?: () => React.ReactElement;
	userItems?: () => React.ReactElement;
	ratingValue?: () => React.ReactElement;
}

export const ListItem = (props: ListItemPropsEx) => {
	const {
		userItems,
		rating,
		poster,
		name,
		enName,
		alternativeName,
		id,
		releaseYears,
		ratingValue,
	} = props;
	const isMobile = deviceDetectServer();
	const path = releaseYears ? getPath.series(id) : getPath.movie(id);

	return (
		<div
			className={clsx(styles.listItem, {
				[styles.listItemFull]: !isMobile,
			})}>
			<Link href={path}>
				<Poster
					widthPoster={72}
					heightPoster={108}
					alt={name ?? enName ?? alternativeName}
					rating={isMobile ? rating : undefined}
					poster={poster}
				/>
			</Link>
			<div className={styles.contentSlot}>
				<ContentSlot {...props} />
			</div>
			{!isMobile && <div className={styles.ratingSlot}>{ratingValue?.()}</div>}
			<div className={styles.user}>{userItems?.()}</div>
		</div>
	);
};
