import React from "react";

function NameComponent({ onChangeText }) {
  const onChangeTextFunc = (e, field) => {
    onChangeText(field, e.target.value);
  };

  return (
    <>
      <div>First Name</div>
      <input
        id="first-name"
        onChange={(e) => onChangeTextFunc(e, "firstName")}
      />
      <div>Last Name</div>
      <input onChange={(e) => onChangeTextFunc(e, "lastName")} />
      <div>Job Title</div>
      <input onChange={(e) => onChangeTextFunc(e, "jobTitle")} />
    </>
  );
}

export default NameComponent;
