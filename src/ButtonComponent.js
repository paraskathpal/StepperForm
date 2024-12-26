import React from "react";

function ButtonComponent({ activeStep, onClickBtn }) {
  return (
    <button onClick={onClickBtn}>{activeStep === 3 ? "Submit" : "Next"}</button>
  );
}

export default ButtonComponent;
