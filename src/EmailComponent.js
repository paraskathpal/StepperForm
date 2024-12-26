import React from "react";

function EmailComponent({ onChangeText }) {
  const onChangeTextFunc = (e) => {
    onChangeText("email", e.target.value);
  };

  return (
    <>
      <div>Email</div>
      <input onChange={onChangeTextFunc} />
    </>
  );
}

export default EmailComponent;
