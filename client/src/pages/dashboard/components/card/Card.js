import React from "react";
import styled, { keyframes } from "styled-components";

const scaleInCard = keyframes`
  0% { transform: scale(0) }
 100% { transform: scale(1.0) }
`;

const CardContainer = styled.article`
  animation-name: ${scaleInCard};
  animation-duration: 1s;

  .card-wrapper {
    img {
      width: 100%;
      border-top-left-radius: 2rem;
      border-top-right-radius: 0.5rem;
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      max-height: 137px;
      object-fit: cover;
    }
    .user-alert-details {
      padding: 0.5rem;
      h3 {
        text-transform: capitalize;
      }
    }
  }
`;

const Card = ({ firstName, lastName, emailAddress, image }) => {
  return (
    <CardContainer>
      <div className="card-wrapper">
        <img src={image} />
        <div className="user-alert-details">
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{emailAddress}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
