import { TouchModal } from '@/entities/TouchModal';
import { ThemeButton } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import { AddToFoldersList } from '../AddToFoldersList';

interface AddToFoldersModalProps {
	className?: string;
	title?: string | null;
	secondaryTitle?: string | null;
	poster?: string | null;
	theme?: ThemeButton;
}

// * Я сюда добавил штуку, что можно устанавливать свой заголовок. В будущем можно это сделать и у других подобных фич для единообразия

const BtnContent = (title?: string | null) => (
	<>
		<Icon name='addToFolder' />
		{title}
	</>
);

export const AddToFoldersModal = ({
	className,
	title = 'Добавить в папку',
	secondaryTitle,
	poster,
	theme = 'modalFull',
}: AddToFoldersModalProps) => {
	return (
		<TouchModal
			theme={theme}
			className={className}
			poster={poster}
			btnContent={BtnContent(title)}
			title='Добавить в папку'
			secondaryTitle={secondaryTitle}
			isTitle>
			<AddToFoldersList />
		</TouchModal>
	);
};
