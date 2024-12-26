import "./styles.css";
import StepComponent from "./StepComponent";
import EmailComponent from "./EmailComponent";
import NameComponent from "./NameComponent";
import PasswordComponent from "./PasswordComponent";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";

export default function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [resultObj, setResultObj] = useState({});

  const onClickBtn = () => {
    if (activeStep === 3) {
      console.log(resultObj, "result printed");
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const onChangeText = (field, text) => {
    const result = { ...resultObj, [`${field}`]: text };
    console.log(result);
    setResultObj(result);
  };

  return (
    <div className="App">
      Are you ready for a demo?
      <div className="form-container">
        <StepComponent key="step" activeStep={activeStep} steps={[1, 2, 3]} />
        <div className="text">Let's get Started</div>
        {activeStep === 1 && (
          <EmailComponent key="email" onChangeText={onChangeText} />
        )}
        {activeStep === 2 && (
          <NameComponent key="name" onChangeText={onChangeText} />
        )}
        {activeStep === 3 && (
          <PasswordComponent key="password" onChangeText={onChangeText} />
        )}
        <br />
        <ButtonComponent activeStep={activeStep} onClickBtn={onClickBtn} />
      </div>
    </div>
  );
}
