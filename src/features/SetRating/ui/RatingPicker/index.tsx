'use client';

import { Movie } from '@/shared/types';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { clsx } from 'clsx';
import {
	ContextIsOpenDropdownProvider,
	ContextValueProvider,
	SetRatingBaseProvider,
	useIsOpen,
	useIsOpenDropdown,
	useIsOpenDropdownSetter,
	useSettersBase,
} from '../../context';
import { DropdownMenuRating } from './DropdownMenuRating';
import { RatingButton } from './RatingButton';
import { VoitingBar } from './VoitingBar';
import styles from './styles.module.scss';

interface RatingPickerProps extends Pick<Movie, 'isSeries'> {
	className?: string;
}

const RatingPickerObj = ({ className, isSeries }: RatingPickerProps) => {
	const isOpen = useIsOpen();
	const { setIsOpen } = useSettersBase();
	const isOpenDropdown = useIsOpenDropdown();
	const setIsOpenDropdown = useIsOpenDropdownSetter();

	return (
		<DropdownWrapper
			setIsOpen={isOpenDropdown ? setIsOpenDropdown : setIsOpen}
			className={clsx(styles.ratingPicker, className)}>
			<RatingButton isSeries={isSeries} />
			{isOpen && <VoitingBar />}
			{isOpenDropdown && <DropdownMenuRating />}
		</DropdownWrapper>
	);
};

export const RatingPicker = (props: RatingPickerProps) => (
	<SetRatingBaseProvider>
		<ContextValueProvider>
			<ContextIsOpenDropdownProvider>
				<RatingPickerObj {...props} />
			</ContextIsOpenDropdownProvider>
		</ContextValueProvider>
	</SetRatingBaseProvider>
);
