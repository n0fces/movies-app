import { ListItem } from '@/entities/ListItem';
import { Pagination } from '@/entities/Pagination';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Suspense } from 'react';
import { getTitles } from '../api/getTitles';
import { NotFound } from './NotFound';
import { UserItems } from './UserItems';
import { WatchItems } from './WatchItems';
import styles from './styles.module.scss';
import { ListItemsSkeleton } from './ListItemsSkeleton';
import { RatingValue } from '@/entities/RatingValue';

interface ListItemsProps {
	params: { [key: string]: string };
	searchParams: { [key: string]: string };
	limit: number;
}

async function ListItemsObj({ params, searchParams, limit }: ListItemsProps) {
	const isMobile = deviceDetectServer();
	const {
		docs: titles,
		page,
		pages,
	} = await getTitles(params.slug, searchParams, limit);

	return titles.length > 0 ? (
		<>
			{titles.map((title) => (
				<ListItem
					ratingValue={() => (
						<RatingValue
							rating={title.rating}
							top250={title.top250}
							votes={title.votes}
						/>
					)}
					userItems={() => (
						<UserItems
							isMobile={isMobile}
							{...title}
						/>
					)}
					watchItems={() => (
						<WatchItems
							isMobile={isMobile}
							{...title}
						/>
					)}
					{...title}
					key={title.id}
				/>
			))}
			{pages > 1 && (
				<Pagination
					page={page}
					pages={pages}
					slug={params.slug}
					searchParams={searchParams}
					className={styles.pagination}
				/>
			)}
		</>
	) : (
		<NotFound />
	);
}

export const ListItems = (props: ListItemsProps) => {
	const { searchParams } = props;
	return (
		<Suspense
			key={JSON.stringify(searchParams)}
			fallback={<ListItemsSkeleton limit={props.limit} />}>
			<ListItemsObj {...props} />
		</Suspense>
	);
};
