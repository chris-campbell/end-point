import React from "react";
import CardContainer from "./styles/styles";

const Card = ({ firstName, lastName, emailAddress, image, address }) => {
  return (
    <CardContainer>
      <div className="card-wrapper">
        <img src={image} />
        <div className="user-alert-details">
          <h3>
            {firstName} {lastName}
          </h3>
          <p className="email">{emailAddress}</p>
          <p className="address">{address}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
