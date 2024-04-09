import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Desktop } from './ui/Desktop';
import { Mobile } from './ui/Mobile';

export default function TitlesLayout({
	params,
	children,
}: {
	params: { slug: string };
	children: React.ReactNode;
}) {
	const isMobile = deviceDetectServer();
	return isMobile ? (
		<Mobile params={params}>{children}</Mobile>
	) : (
		<Desktop params={params}>{children}</Desktop>
	);
}
