import { useState, useRef, useEffect } from "react";
import Card from "../card/Card";
import axiosClient from "../../../../utils/apiClient";
import Pagination from "../pagination/Pagination";
import styled from "styled-components";
import { Rings } from "react-loader-spinner";

const PendingAlertsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;

const RingLoader = styled(Rings)`
  display: flex;
  justify-content: center;
`;

const PendingAlerts = ({
  userId,
  incomingAlert,
  alertsCount,
  setAlertsCount,
}) => {
  const [alerts, setAlerts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [alertsPerPage] = useState(8);
  const [loading, setLoading] = useState(false);

  const credentials = { withCredentials: true };

  useEffect(() => {
    setAlerts((prev) => [...prev, incomingAlert]);
  }, [incomingAlert]);

  useEffect(() => {
    const fetchAlerts = async () => {
      setLoading(true);
      try {
        const { data } = await axiosClient.post(
          "/fetchAlerts",
          { userId },
          credentials
        );

        if (data) {
          setAlertsCount(data.length);
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

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const indexOfLastAlert = currentPage * alertsPerPage;
  const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;
  const currentAlerts = alerts.slice(indexOfFirstAlert, indexOfLastAlert);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PendingAlertsContainer>
        {loading ? (
          <div style={style}>
            <RingLoader color="#ac1111" />
          </div>
        ) : (
          alerts &&
          currentAlerts.map((alert) => {
            return <Card key={alert._id} {...alert} />;
          })
        )}
      </PendingAlertsContainer>

      <Pagination
        alertsPerPage={alertsPerPage}
        totalAlerts={alertsCount}
        paginate={paginate}
      />
    </>
  );
};

export default PendingAlerts;
