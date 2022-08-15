import styled from "styled-components";

const SignupFormContainer = styled.form`
  width: 100%;

  @media (max-width: 794px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signup-form-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    margin: 0 auto;
    justify-content: center;
    padding: 2rem;

    @media (max-width: 794px) {
      min-height: 0;
      display: block;
      max-width: 100%;
    }

    h2 {
      margin-bottom: 2rem;
      text-transform: uppercase;
      text-align: center;
    }
  }
`;

export default SignupFormContainer;
