import React from "react";

function StepComponent({ steps, activeStep }) {
  return (
    <div className="step-container">
      {steps.map((step) => (
        <>
          <span
            key={`${step}`}
            className={`step ${step === activeStep ? "active-step" : ""}`}
          >
            {step}
          </span>
          {step !== 3 && <span className="divider-line" />}
        </>
      ))}
    </div>
  );
}

export default StepComponent;
