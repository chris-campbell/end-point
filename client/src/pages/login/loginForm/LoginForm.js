import React from "react";
import Input from "../input/Input";
import styled from "styled-components";

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  .login-btn {
    border: none;
    height: 2.5rem;
    border-radius: 0.3rem;
    margin-bottom: 2rem;
    background: var(--secondary-color);
    color: var(--accent-light);
    text-align: center;
    width: 100%;
  }

  .login-btn:hover {
    background: #d8b011;
  }
`;

const LoginForm = ({ loginUser, updateState }) => {
  return (
    <LoginFormContainer className="login-form" onSubmit={loginUser}>
      <Input
        type="text"
        name="email"
        setType="emailAddress"
        placeHolder="james@domain.com"
        setState={updateState}
      />
      <Input
        type="password"
        name="password"
        setType="password"
        placeHolder="•••••••••"
        setState={updateState}
      />

      <button className="login-btn">Submit</button>
    </LoginFormContainer>
  );
};

export default LoginForm;
