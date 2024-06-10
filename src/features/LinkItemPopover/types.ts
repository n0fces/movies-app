export interface LinkItemProps {
	className?: string;
	id?: number | null;
	name: string;
	href?: string;
	wordIsLink?: boolean;
	isMobile?: boolean;
}

export type AdditionalInfoList = Record<string, string[] | JSX.Element | null>;
