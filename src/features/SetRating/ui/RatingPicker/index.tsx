'use client';

import { Movie } from '@/shared/types';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { clsx } from 'clsx';
import {
	IsOpenBarProvider,
	IsOpenDropdownMenu,
	SetRatingProvider,
	useIsOpenBar,
	useIsOpenDropdownMenu,
} from '../../context';
import { DropdownMenuRating } from './DropdownMenuRating';
import { RatingButton } from './RatingButton';
import { VoitingBar } from './VoitingBar';
import styles from './styles.module.scss';

interface RatingPickerProps extends Pick<Movie, 'isSeries'> {
	className?: string;
}

const RatingPickerObj = ({ className, isSeries }: RatingPickerProps) => {
	const { isOpen, setIsOpen } = useIsOpenBar();
	const { isOpenDropdown, setIsOpenDropdown } = useIsOpenDropdownMenu();

	return (
		<DropdownWrapper
			setIsOpen={isOpen ? setIsOpen : setIsOpenDropdown}
			className={clsx(styles.ratingPicker, className)}>
			<RatingButton isSeries={isSeries} />
			{isOpen && <VoitingBar />}
			{isOpenDropdown && <DropdownMenuRating />}
		</DropdownWrapper>
	);
};

export const RatingPicker = (props: RatingPickerProps) => (
	<SetRatingProvider>
		<IsOpenBarProvider>
			<IsOpenDropdownMenu>
				<RatingPickerObj {...props} />
			</IsOpenDropdownMenu>
		</IsOpenBarProvider>
	</SetRatingProvider>
);
