import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: var(--primary-color-red);
  min-height: 100vh;

  .login-wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .contain {
      width: 100%;
      max-width: 35rem;
      padding-inline: 1rem;
      .signup {
        padding-inline: 1rem;
      }
    }

    img {
      display: block;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    .not-registered {
      color: var(--accent-light);
      margin-top: 1rem;
      .registered-link {
        color: var(--secondary-color);
      }
    }
  }
`;

export default LoginContainer;
