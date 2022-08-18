import { useState, useRef, useEffect } from "react";
import Card from "../card/Card";
import axiosClient from "../../../../utils/apiClient";
import Pagination from "../pagination/Pagination";
import * as S from "./styles/styles";

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
      <S.PendingAlertsContainer>
        {loading ? (
          <div style={style}>
            <S.RingLoader color="#ac1111" />
          </div>
        ) : (
          alerts &&
          currentAlerts.map((alert) => {
            return <Card key={alert._id} {...alert} />;
          })
        )}
      </S.PendingAlertsContainer>

      <Pagination
        alertsPerPage={alertsPerPage}
        totalAlerts={alertsCount}
        paginate={paginate}
      />
    </>
  );
};

export default PendingAlerts;
