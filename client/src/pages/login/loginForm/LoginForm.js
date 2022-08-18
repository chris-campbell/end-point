import React from "react";
import styled from "styled-components";
import Input from "./input/Input";

const LoginFormContainer = styled.form`
  padding: 1rem;
  max-width: 35rem;
  margin: 0 auto;
  .form-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .login-btn {
    width: 100%;
    height: 3rem;
    border: none;
    background-color: var(--secondary-color);
    color: var(--accent-light);
    margin-bottom: 1rem;
    border-radius: 0.2rem;
    &:hover {
      background: #d8b011;
    }
  }
`;

const LoginForm = ({ loginUser, updateState }) => {
  return (
    <LoginFormContainer className="login-form" onSubmit={loginUser}>
      <div className="form-wrapper">
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
      </div>

      <button className="login-btn">Log in</button>
    </LoginFormContainer>
  );
};

export default LoginForm;
