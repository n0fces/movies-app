'use client';

import { TouchModal } from '@/entities/TouchModal';
import { ListItemProps, ThemeButton } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import { useEffect } from 'react';
import { SetRatingProvider, useSetRating } from '../../context';
import { PreviewRating } from './PreviewRating';
import { SetRatingButtons } from './SetRatingButtons';
import { Voiting } from './Voiting';

const BtnContent = () => (
	<>
		<Icon name='ratingStroked' />
		Оценить
	</>
);

interface RatingModalProps extends ListItemProps {
	theme?: ThemeButton;
	className?: string;
}

const RatingModalObj = ({
	poster,
	name,
	alternativeName,
	enName,
	className,
	theme = 'default',
}: RatingModalProps) => {
	const { setValue } = useSetRating();

	useEffect(() => {
		return () => setValue(undefined);
	}, [setValue]);

	return (
		<TouchModal
			theme={theme}
			className={className}
			poster={poster?.previewUrl}
			btnContent={BtnContent()}
			title={name || alternativeName || enName}
			secondaryTitle={alternativeName || enName}
			isTitle>
			<PreviewRating />
			<Voiting />
			<SetRatingButtons />
		</TouchModal>
	);
};

export const RatingModal = (props: RatingModalProps) => (
	<SetRatingProvider>
		<RatingModalObj {...props} />
	</SetRatingProvider>
);
