import { BasicMediaPersonMobile } from '@/widgets/BasicMediaPersonMobile';
import { FeaturesPersonPage } from '@/widgets/FeaturesPersonPage/ui';
import { TableInfoPersonMobile } from '@/widgets/TableInfoPersonMobile';

interface MobilePersonProps {
	className?: string;
	id: number;
}

export const MobilePerson = ({ className, id }: MobilePersonProps) => {
	return (
		<div className={className}>
			<BasicMediaPersonMobile id={id} />
			<FeaturesPersonPage id={id} />
			<TableInfoPersonMobile id={id} />
		</div>
	);
};
