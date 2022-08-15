import React from "react";
import Sender from "../../img/sender.svg";
import { sendAlerts } from "../../js/socketCommands";
import { ws } from "../../js/socket";
import { useCurrentUser } from "../../../../context/UserContext";

const AlertSender = ({ sendList }) => {
  const socket = ws;
  const { currentUser } = useCurrentUser();
  return (
    <div className="dashboard-send-alert-console">
      <div className="dashboard-outgoing-alerts">
        <div>
          <span>{sendList.length} people in send queue</span>
          <img
            onClick={() => sendAlerts(socket, sendList, currentUser)}
            className="sender-button"
            src={Sender}
          />
        </div>
        <ul className="outgoing-alerts">
          {sendList.map((user) => (
            <img src={user.image} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlertSender;
