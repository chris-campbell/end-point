import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  height: 3.5rem;
  background-color: transparent;
  border: 2px solid white;
  max-width: 35rem;
  flex-basis: 35rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  color: #fff;
  border-radius: 0.2rem;
  &::placeholder {
    color: #ffffff99;
    font-size: 1.1em;
  }
`;

const Input = ({ type, name, setState, placeHolder, setType }) => {
  return (
    <InputContainer
      type={type}
      name={name}
      onChange={(e) => setState(e.target.value, setType)}
      placeholder={placeHolder}
    />
  );
};

export default Input;
