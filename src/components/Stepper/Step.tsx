import styles from "./Step.module.css";

const Step = ({
	label,
	index,
	isActive,
}: {
	label: string;
	index: number;
	isActive: boolean;
}) => {
	return (
		<div className="flex gap-2 items-center">
			<div className={isActive ? styles.active : styles.inactive}>
				{index + 1}
			</div>
			<p>{label}</p>
		</div>
	);
};

export default Step;
