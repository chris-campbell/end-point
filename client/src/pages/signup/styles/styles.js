import styled from "styled-components";

const SignupContainer = styled.div`
  .signup-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    min-height: 100vh;

    @media (max-width: 794px) {
      grid-template-rows: auto auto;
      grid-template-columns: none;
    }

    .signup-message-panel {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background-color: var(--primary-color-red);

      @media (max-width: 794px) {
        padding: 3rem 2rem;
      }

      .signup-message-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 27rem;

        img {
          margin-bottom: 2.5rem;
        }

        h1 {
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          color: var(--secondary-color);
          text-align: center;
          font-size: clamp(1.3rem, 2vw, 2rem);
          font-weight: 600;
        }

        p {
          margin-bottom: 2rem;
          line-height: 1.5rem;
          text-align: center;
          color: var(--accent-light);
        }

        button {
          border-radius: 2rem;
          max-width: fit-content;
          background-color: transparent;
          border: 1px solid var(--accent-light);
          color: var(--accent-light);
          a {
            text-decoration: none;
            color: #fff;
            padding: 1rem;
          }
        }
      }
    }
  }
`;

export default SignupContainer;
