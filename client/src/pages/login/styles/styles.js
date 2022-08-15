import styled from "styled-components";

const LoginContainer = styled.div`
  background: var(--primary-color-red);
  height: 100vh;

  .login-wrapper {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .login-logo {
      width: 4rem;
      margin: 0 auto;
      margin-bottom: 3rem;
      margin-top: 8rem;
    }

    .register-user {
      color: var(--accent-light);
    }

    .register-link {
      color: var(--secondary-color);
      text-decoration: none;
    }

    .text-field::-webkit-input-placeholder {
      color: var(--accent-light);
    }
  }
`;

export default LoginContainer;
