'use client';

import { useEffect } from 'react';

import { TouchModal } from '@/entities/TouchModal';

import { ListItemProps } from '@/shared/types';
import {
	ReverseDirection,
	ShapeButton,
	SizeButton,
	ThemeButton,
} from '@/shared/ui/Button/types';
import { Icon } from '@/shared/ui/Icon';

import {
	ContextValueProvider,
	SetRatingBaseProvider,
	useValueSetter,
} from '../../context';
import { PreviewRating } from './PreviewRating';
import { SetRatingButtons } from './SetRatingButtons';
import { Voiting } from './Voiting';

const BtnContent = () => (
	<>
		<Icon name="ratingStroked" />
		Оценить
	</>
);

interface RatingModalProps extends ListItemProps {
	theme?: ThemeButton;
	shape?: ShapeButton;
	size?: SizeButton;
	withoutPadding?: boolean;
	className?: string;
	reverseDirection?: ReverseDirection;
}

const RatingModalObj = ({
	poster,
	name,
	alternativeName,
	enName,
	className,
	theme,
	shape,
	size,
	withoutPadding,
	reverseDirection,
}: RatingModalProps) => {
	const setValue = useValueSetter();

	useEffect(() => {
		return () => {
			setValue(undefined);
		};
	}, [setValue]);

	return (
		<TouchModal
			theme={theme}
			shape={shape}
			size={size}
			withoutPadding={withoutPadding}
			reverseDirection={reverseDirection}
			className={className}
			poster={poster?.previewUrl}
			btnContent={BtnContent()}
			title={name ?? alternativeName ?? enName}
			secondaryTitle={alternativeName ?? enName}
			isTitle>
			<PreviewRating />
			<Voiting />
			<SetRatingButtons />
		</TouchModal>
	);
};

export const RatingModal = (props: RatingModalProps) => (
	<SetRatingBaseProvider>
		<ContextValueProvider>
			<RatingModalObj {...props} />
		</ContextValueProvider>
	</SetRatingBaseProvider>
);
