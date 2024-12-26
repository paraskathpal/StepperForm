import React from "react";

function PasswordComponent({ onChangeText }) {
  const onChangeTextFunc = (e, field) => {
    onChangeText(field, e.target.value);
  };

  return (
    <div>
      <div>Password</div>
      <input
        type="password"
        onChange={(e) => onChangeTextFunc(e, "password")}
      />
      <div>Confirm Password</div>
      <input
        type="password"
        onChange={(e) => onChangeTextFunc(e, "confirmPassword")}
      />
      {/* <InputComponent type={} idOftheComponent={} onChange=() => {}/> */}
    </div>
  );
}

export default PasswordComponent;
