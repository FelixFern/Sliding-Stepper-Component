/* eslint-disable @typescript-eslint/no-explicit-any */
import Step from "./Step";
import styles from "./Stepper.module.css";
import { useStepperImpl } from "./useStepperImpl";

export type TStep = {
	label: string;
};

const Stepper = ({
	steps,
	currentStep,
	containerRef,
}: {
	steps: TStep[];
	currentStep: number;
	containerRef: React.RefObject<HTMLDivElement>;
}) => {
	const { stepsIndexRefs, translate } = useStepperImpl({
		containerRef,
		currentStep,
		totalSteps: steps.length,
	});

	return (
		<div
			className={styles.stepperContainer}
			style={{
				transform: `translateX(-${translate}px)`,
			}}
		>
			{steps.map((step, index) => (
				<div
					ref={(el) => ((stepsIndexRefs as any).current[index] = el)}
				>
					<Step
						label={step.label}
						index={index}
						isActive={currentStep === index}
					/>
				</div>
			))}
		</div>
	);
};

export default Stepper;
