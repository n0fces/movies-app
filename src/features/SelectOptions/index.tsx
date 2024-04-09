import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { DetailsFilters } from './ui/DetailsFilters';
import { Filters } from './ui/Filters';

export const SelectOptions = () => {
	const isMobile = deviceDetectServer();

	return !isMobile ? <DetailsFilters /> : <Filters />;
};
