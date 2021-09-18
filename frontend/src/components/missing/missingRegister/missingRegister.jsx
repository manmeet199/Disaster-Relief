import React, { useState } from "react";
import Popup from "./popUp";
import "./missingRegister.css";
import missingRegisterForm from "./missingRegisterForm";

const MissingRegister = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="missingRegister-container">
      <div className="missingRegister-section">
        <h3>
          You can provide details of your friends and families who are
          missing.We will provide this data to goverment officials and cerculate
          it on our website.
        </h3>
        <input
          type="button"
          className="register-button"
          value="Register Here"
          onClick={togglePopup}
        />
      </div>
      <div className="missingRegister-image">
        <img
          src={require("../../../assets/images/missingRegister.png").default}
          alt=""
        />
      </div>
      {isOpen && <Popup handleClose={togglePopup} />}
    </div>
  );
};

export default MissingRegister;
