'use client';

import { Movie } from '@/shared/types';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';

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
			className={className}>
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
