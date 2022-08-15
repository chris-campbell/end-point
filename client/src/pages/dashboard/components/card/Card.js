import React from "react";
import styled from "styled-components";

const CardContainer = styled.article`
  .card-wrapper {
    img {
      width: 100%;
    }
  }
`;

const Card = ({ firstName, lastName }) => {
  return (
    <CardContainer>
      <div className="card-wrapper">
        <img src="https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=620&quality=45&fit=max&dpr=2&s=cf32fe917eee44334acd8c7fc7ebbffc" />
        <h3>
          {firstName} {lastName}
        </h3>
      </div>
    </CardContainer>
  );
};

export default Card;
