import { useRef } from "react";

export const useStepperImpl = ({
	containerRef,
	currentStep,
	totalSteps,
}: {
	containerRef: React.RefObject<HTMLDivElement>;
	currentStep: number;
	totalSteps: number;
}) => {
	const stepsIndexRefs = useRef({});

	const containerWidth = containerRef.current?.getBoundingClientRect().width;

	const totalStepperWidth = Object.entries(stepsIndexRefs.current)
		.map((val) => {
			return ((val[1] as HTMLDivElement)?.getBoundingClientRect().width ??
				0) as number;
		})
		.reduce((prev, curr) => prev + curr, 0);

	const translate =
		(containerWidth ?? 0) > totalStepperWidth
			? 0
			: Math.min(
					totalStepperWidth -
						(containerWidth ?? 0) +
						(totalSteps + 1) * 16,
					Object.entries(stepsIndexRefs.current)
						.splice(0, currentStep)
						.map((val) => {
							return (
								(
									val[1] as HTMLDivElement
								)?.getBoundingClientRect().width + 16 ?? 0
							);
						})
						.reduce((prev, curr) => prev + curr, 0)
	);

	return {
		stepsIndexRefs,
		translate,
	};
};
