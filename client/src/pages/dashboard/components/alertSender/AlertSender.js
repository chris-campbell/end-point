import React from "react";
import Sender from "../../img/sender.svg";
import AlertSenderContainer from "./styles/styles";

import { sendAlerts } from "../../js/socketCommands";
import { useCurrentUser } from "../../../../context/UserContext";
import { ws } from "../../js/socket";

const AlertSender = ({ sendList }) => {
  // Socket instance
  const socket = ws;

  const { currentUser } = useCurrentUser();

  return (
    <AlertSenderContainer>
      <div className="alert-sender-wrapper">
        <div className="send-console">
          <span className="send-queue">
            <span className="queue-count">{sendList.length}</span> people in
            send queue
          </span>
          <img
            onClick={() => sendAlerts(socket, sendList, currentUser)}
            width={30}
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
