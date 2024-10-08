import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useNoscroll } from '@/shared/hooks/useNoscroll';

export const useModel = (isMobile: boolean) => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useNoscroll(isMobile, isOpen);

	return { isOpen, setIsOpen, pathname };
};
