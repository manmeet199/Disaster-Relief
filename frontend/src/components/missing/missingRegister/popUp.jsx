import React from "react";
import MissingRegister from "./missingRegister";
import MissingRegisterForm from "./missingRegisterForm";

const Popup = (props) => {
  console.log(props);
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <MissingRegisterForm />
      </div>
    </div>
  );
};

export default Popup;
