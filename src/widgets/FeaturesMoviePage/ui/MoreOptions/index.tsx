import { FeedbackButtons } from '@/features/FeedbackButtons';

import { TouchModal } from '@/entities/TouchModal';

import { Icon } from '@/shared/ui/Icon';

interface MoreOptionsProps {
	className?: string;
	poster?: string | null;
	title?: string | null;
	secondaryTitle?: string | null;
}

const BtnContentOptions = () => (
	<>
		<Icon name="more-options" />
		Еще
	</>
);

export const MoreOptions = ({
	className,
	poster,
	title,
	secondaryTitle,
}: MoreOptionsProps) => {
	return (
		<TouchModal
			theme="textBelow"
			className={className}
			btnContent={BtnContentOptions()}
			poster={poster}
			title={title}
			secondaryTitle={secondaryTitle}
			isTitle>
			<div>
				<FeedbackButtons theme="modal" />
			</div>
		</TouchModal>
	);
};
