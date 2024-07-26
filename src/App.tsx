import { useRef, useState } from "react";
import Stepper, { TStep } from "./components/Stepper/Stepper";

const steps: TStep[] = [
	{ label: "Step 1" },
	{ label: "Step 2" },
	{ label: "Step 3" },
	{ label: "Step 4" },
	{ label: "Step 5" },
	{ label: "Step 6" },
	{ label: "Step 7" },
	{ label: "Step 8" },
	{ label: "Step 9" },
	{ label: "Step 10" },
];

function App() {
	const [currentStep, setCurrentStep] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);

	const handleNext = () => {
		setCurrentStep(
			currentStep < steps.length - 1 ? currentStep + 1 : currentStep
		);
	};

	const handleBack = () => {
		setCurrentStep(currentStep > 0 ? currentStep - 1 : currentStep);
	};

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen gap-2 overflow-hidden bg-neutral-800">
			<div
				className="w-1/2 p-4 overflow-hidden border-2 border-orange-700 rounded-sm"
				ref={containerRef}
			>
				<Stepper
					steps={steps}
					currentStep={currentStep}
					containerRef={containerRef}
				/>
			</div>
			<div className="flex gap-12 my-2">
				<button onClick={handleBack}>{"<"} Back</button>
				<button onClick={handleNext}>Next {">"}</button>
			</div>
		</div>
	);
}

export default App;
