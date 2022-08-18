import styled from "styled-components";

const AlertSenderContainer = styled.div`
  .alert-sender-wrapper {
    padding: 2rem 0 0 0;
    .send-console {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      .send-queue {
        font-size: 1.1rem;
        color: var(--label-sub);
        letter-spacing: 0.02rem;
        .queue-count {
          font-weight: 600;
          color: var(--accent-dark);
          margin-right: 0.5rem;
        }
      }
    }
    .outgoing-alerts {
      padding: 0;
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 10rem;
        margin-left: 0.3rem;
        box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.48);
        -webkit-box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.48);
        -moz-box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.48);
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;

export default AlertSenderContainer;
