import { TouchModal } from '@/entities/TouchModal';

import {
	ReverseDirection,
	ShapeButton,
	SizeButton,
	ThemeButton,
} from '@/shared/ui/Button/types';
import { Icon } from '@/shared/ui/Icon';

import { AddToFoldersList } from '../AddToFoldersList';

interface AddToFoldersModalProps {
	className?: string;
	title?: string | null;
	secondaryTitle?: string | null;
	poster?: string | null;
	theme?: ThemeButton;
	shape?: ShapeButton;
	size?: SizeButton;
	withoutPadding?: boolean;
	reverseDirection?: ReverseDirection;
}

// * Я сюда добавил штуку, что можно устанавливать свой заголовок. В будущем можно это сделать и у других подобных фич для единообразия

const BtnContent = (title?: string | null) => (
	<>
		<Icon name="addToFolder" />
		{title}
	</>
);

export const AddToFoldersModal = ({
	className,
	title = 'Добавить в папку',
	secondaryTitle,
	poster,
	theme = 'modal',
	size,
	shape,
	withoutPadding,
	reverseDirection,
}: AddToFoldersModalProps) => {
	return (
		<TouchModal
			theme={theme}
			size={size}
			shape={shape}
			withoutPadding={withoutPadding}
			className={className}
			poster={poster}
			reverseDirection={reverseDirection}
			btnContent={BtnContent(title)}
			title="Добавить в папку"
			secondaryTitle={secondaryTitle}
			isTitle>
			<AddToFoldersList />
		</TouchModal>
	);
};
