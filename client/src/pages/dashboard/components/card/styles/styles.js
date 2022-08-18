import styled, { keyframes } from "styled-components";

const scaleInCard = keyframes`
  0% { transform: scale(0.3) }
 100% { transform: scale(1.0) }
`;

const CardContainer = styled.article`
  animation-name: ${scaleInCard};
  animation-duration: 800ms;
  border-top-left-radius: 2rem;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  box-shadow: 10px 10px 29px -19px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 29px -19px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 29px -19px rgba(0, 0, 0, 0.75);
  .card-wrapper {
    img {
      width: 100%;
      border-top-left-radius: 2rem;
      border-top-right-radius: 0.5rem;
      max-height: 137px;
      object-fit: cover;
    }
    .user-alert-details {
      padding: 0.5rem;
      text-align: center;
      h3 {
        text-transform: capitalize;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0;
        margin-top: 1rem;
        color: var(--primary-color-red);
      }

      .email {
        font-size: 0.9rem;
        color: var(--accent-dark);
      }

      .address {
        font-size: 0.7rem;
        color: var(--accent-dark);
      }
    }
  }
`;

export default CardContainer;
