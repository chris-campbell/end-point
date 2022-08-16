import React from "react";
import Sender from "../../img/sender.svg";
import { sendAlerts } from "../../js/socketCommands";
import { ws } from "../../js/socket";
import { useCurrentUser } from "../../../../context/UserContext";
import styled from "styled-components";

const AlertSenderContainer = styled.div`
  .alert-sender-wrapper {
    padding: 2rem 0;
    .send-console {
      display: flex;
      align-items: center;
      gap: 2rem;
      .send-queue {
        font-size: 1.2rem;
        color: var(--label-sub);
        letter-spacing: 0.02rem;
      }
    }
  }
`;

const AlertSender = ({ sendList }) => {
  const socket = ws;
  const { currentUser } = useCurrentUser();
  return (
    <AlertSenderContainer>
      <div className="alert-sender-wrapper">
        <div className="send-console">
          <span className="send-queue">
            {sendList.length} people in send queue
          </span>
          <img
            onClick={() => sendAlerts(socket, sendList, currentUser)}
            width={40}
            src={Sender}
          />
        </div>
        <ul className="outgoing-alerts">
          {sendList.map((user) => (
            <img src={user.image} />
          ))}
        </ul>
      </div>
    </AlertSenderContainer>
  );
};

export default AlertSender;
