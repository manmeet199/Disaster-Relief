import React from "react";
import MissingDetail from "./missingDetail/missingDetail";
import MissingRegister from "./missingRegister/missingRegister";

const Missing = () => {
  return (
    <div className="missing-container">
      <MissingRegister />
      <MissingDetail />
    </div>
  );
};

export default Missing;
