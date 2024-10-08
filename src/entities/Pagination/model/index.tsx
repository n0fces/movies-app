export const generatePagination = (
	currentPage: number,
	totalPages: number,
	isMobile: boolean,
): (number | '...')[] => {
	if (totalPages <= 5) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	if (isMobile) {
		if (currentPage <= 4) {
			if (currentPage + 1 <= totalPages - 1) {
				return [
					...Array.from({ length: currentPage + 1 }, (_, i) => i + 1),
					'...',
					totalPages,
				];
			} else {
				return Array.from({ length: totalPages }, (_, i) => i + 1);
			}
		}
		if (currentPage >= totalPages - 3) {
			return [
				1,
				'...',
				...Array.from(
					{ length: totalPages - currentPage + 1 + 1 },
					(_, i) => currentPage - 1 + i,
				),
			];
		}
		return [
			1,
			'...',
			currentPage - 1,
			currentPage,
			currentPage + 1,
			'...',
			totalPages,
		];
	} else {
		if (currentPage <= 6) {
			if (currentPage + 3 <= totalPages - 3) {
				return [
					...Array.from({ length: currentPage + 3 }, (_, i) => i + 1),
					'...',
					totalPages,
				];
			} else {
				return Array.from({ length: totalPages }, (_, i) => i + 1);
			}
		}
		if (currentPage >= totalPages - 5) {
			return [
				1,
				'...',
				...Array.from(
					{ length: totalPages - currentPage + 1 + 3 },
					(_, i) => currentPage - 3 + i,
				),
			];
		}
		return [
			1,
			'...',
			currentPage - 3,
			currentPage - 2,
			currentPage - 1,
			currentPage,
			currentPage + 1,
			currentPage + 2,
			currentPage + 3,
			'...',
			totalPages,
		];
	}
};
