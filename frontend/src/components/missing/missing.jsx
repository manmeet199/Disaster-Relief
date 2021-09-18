import React from "react";
import Navbar from "../navbar/navbar";
import MissingDetail from "./missingDetail/missingDetail";
import MissingRegister from "./missingRegister/missingRegister";

const Missing = () => {
  return (
    <div>
      <Navbar />
      <div className="missing-container">
        <MissingRegister />
        <MissingDetail />
      </div>
    </div>
  );
};

export default Missing;
