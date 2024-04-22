import { TouchModal } from '@/entities/TouchModal';
import { Profession, ThemeButton } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import { AddToFoldersPersonList } from '../AddToFoldersPersonList';

interface AddToFoldersPersonModalProps {
	className?: string;
	title?: string | null;
	secondaryTitle?: string | null;
	poster?: string | null;
	theme?: ThemeButton;
	profession: Profession[] | undefined;
}

const BtnContent = (title?: string | null) => (
	<>
		<Icon name='addToFolder' />
		{title}
	</>
);

export const AddToFoldersPersonModal = ({
	className,
	title = 'Добавить в папку',
	secondaryTitle,
	poster,
	theme = 'textBelow',
	profession,
}: AddToFoldersPersonModalProps) => {
	return (
		<TouchModal
			theme={theme}
			className={className}
			poster={poster}
			btnContent={BtnContent(title)}
			title='Добавить в папку'
			secondaryTitle={secondaryTitle}
			isTitle>
			<AddToFoldersPersonList profession={profession} />
		</TouchModal>
	);
};
