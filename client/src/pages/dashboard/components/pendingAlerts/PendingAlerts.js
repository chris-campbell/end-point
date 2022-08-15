import { useState, useRef, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import Card from "../card/Card";
import axiosClient from "../../../../utils/apiClient";
import styled from "styled-components";

const PendingAlertsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const PendingAlerts = ({ userId, incomingAlert }) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAlerts((prev) => [...prev, incomingAlert]);
  }, [incomingAlert]);

  useEffect(() => {
    const fetchAlerts = async () => {
      setLoading(true);
      try {
        const { data } = await axiosClient.post(
          "/fetchAlerts",
          { userId: userId },
          {
            withCredentials: true,
          }
        );

        if (data) {
          setAlerts(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <PendingAlertsContainer>
      {loading ? (
        <Audio />
      ) : (
        alerts &&
        alerts.map((alert) => {
          return <Card {...alert} />;
        })
      )}
    </PendingAlertsContainer>
  );
};

export default PendingAlerts;
