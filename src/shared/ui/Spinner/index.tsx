import styles from './styles.module.scss';

interface SpinnerProps {
	radius: number;
}

export const Spinner = ({ radius }: SpinnerProps) => {
	return (
		<div
			className={styles.spinner}
			style={{
				width: `${2 * radius}px`,
				height: `${2 * radius}px`,
				borderWidth: `${radius * 0.2}px`,
			}}></div>
	);
};