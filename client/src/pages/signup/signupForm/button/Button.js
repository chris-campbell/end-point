import React from "react";
import styled from "styled-components";

const Button = ({ emailUnique, isFieldsEmpty }) => {
  const fieldsEmpty = isFieldsEmpty();

  return (
    <Shell>
      <ButtonContainer
        isDisabled={fieldsEmpty}
        onClick={emailUnique}
        disabled={fieldsEmpty ? false : true}
      >
        Sign up
      </ButtonContainer>
    </Shell>
  );
};

export default Button;

const Shell = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const ButtonContainer = styled.button`
  background-color: ${(p) =>
    p.isDisabled ? "var(--secondary-color)" : "lightgray"};
  padding: 1rem 4rem;
  max-width: fit-content;
  border-radius: 2rem;
  border: none;
`;
