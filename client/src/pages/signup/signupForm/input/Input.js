import styled from "styled-components";

const Input = ({ type, name, setState, placeHolder, setType }) => {
  return (
    <InputContainer
      type={type}
      name={name}
      placeholder={placeHolder}
      onChange={(e) => setState(e.target.value, setType)}
    />
  );
};

export default Input;

const InputContainer = styled.input`
  height: 3rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-radius: 0.3rem;
  border: 1px solid lightgrey;
  width: 100%;
  font-size: 0.9rem;
  letter-spacing: 0.07rem;
  color: #535353;
`;
