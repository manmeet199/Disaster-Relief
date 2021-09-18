import React from "react";
import "./card.css";

export const Card = ({ info }) => {
  const CardName = info ? info.name : "Card Name";
  const CardDescription = info ? info.description : "Card Description";
  const CardImage = info ? info.photo : "";
  const CardAge = info ? info.age : "";
  const CardPlace = info ? info.place : "Unknown";

  return (
    <div className="card">
      <div className="card-img-div">
        <img src={CardImage} alt="" />
      </div>
      <div className="card-detail-div">
        <h1 className="name">{CardName}</h1>
        <h2 className="age">{CardAge}</h2>
        <p className="description">
          Last seen: {CardPlace} <br />
          <br />
          Detail: {CardDescription}
        </p>
      </div>
    </div>
  );
};
