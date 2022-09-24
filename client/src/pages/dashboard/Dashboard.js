import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles/styles";
import { useLocation } from "react-router-dom";
import { useCurrentUser } from "../../context/UserContext";
import slugify from "react-slugify";

import AlertSender from "./components/alertSender/AlertSender";
import SearchForm from "./components/searchForm/SearchForm";
import ContactSuggestionList from "./components/contactSuggestionList/ContactSuggestionList";
import PendingAlerts from "./components/pendingAlerts/PendingAlerts";

import axiosClient from "../../utils/apiClient";
import useCoordinates from "../../hooks/coordinates";
import useErrors from "../../hooks/useErrors";
import { useSnackbar } from "notistack";

import searchHandler from "./js/searchHandler";
import { recievedAlert, addContactToList } from "./js/utils/actions";
import { ws } from "./js/socket";

const Dashboard = () => {
  // Application state
  const [sendList, setSendList] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [incomingAlert, setIncomingAlert] = useState([]);
  const [alertsCount, setAlertsCount] = useState(0);
  const [showSuggestionArea, setShowSuggestionArea] = useState(false);

  // Ref declarations
  const suggestionBox = useRef(null);
  const inputRef = useRef(null);
  const socket = useRef(ws);

  // Hooks inplementation
  const { currentUser, loading } = useCurrentUser();
  const { userCoordinates, isLoading } = useCoordinates();
  const { enqueueSnackbar } = useSnackbar();
  const { error, setError } = useErrors();
  const location = useLocation();

  const cred = { withCredentials: true };

  /**
   * Fetch and set all contacts for suggestion box
   */
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await axiosClient.get("/getAllUsers", cred);

        setContacts(data);
      } catch (error) {
        setError(error.response.data);
      }
    };

    fetchContacts();
  }, []);

  /**
   * Set incoming alert dataand send notification
   */
  useEffect(() => {
    socket.current.on("send_alert", (res) => {
      setAlertsCount(res.alerts[0].alerts.length);
      setIncomingAlert(res.alert);
      recievedAlert(enqueueSnackbar, res.alert.firstName, res.alert.lastName);
    });
  }, [location.pathname, enqueueSnackbar]);

  /**
   * Setup current user coordinates
   */
  useEffect(() => {
    error && enqueueSnackbar(error, { variant: "error" });
  }, [error]);

  /*
   * Set socket data to user
   */
  useEffect(() => {
    const attachSocket = async () => {
      const { _id, firstName, lastName } = currentUser;

      const userData = {
        id: _id,
        socketId: socket.current.id,
        userName: slugify(`${firstName} ${lastName}`),
      };

      try {
        await axiosClient.post("/addSocket", userData, cred);
      } catch (error) {
        setError(error);
      }
    };

    currentUser && attachSocket();
  }, [socket, currentUser, location.pathname]);

  /*
   * Setup current user coordinates
   */
  useEffect(() => {
    isLoading && setCoordinates(userCoordinates);
  }, [userCoordinates]);

  const getSearchTerm = () => {
    searchHandler(
      inputRef.current.value,
      setSearchTerm,
      setSearchResults,
      setShowSuggestionArea,
      contacts
    );
  };

  const addToSenderList = (e) => {
    const contactId = e.currentTarget.getAttribute("data-id");

    const contact = contacts.filter((contact) => contact._id === contactId);
    const isContactInList = sendList.filter((user) => user._id === contactId)
      .length;

    // Set form and contact suggestion box to initial state
    setSearchTerm("");
    setShowSuggestionArea(false);

    if (!isContactInList) {
      addContactToList(setSendList, contact[0]);

      return setSearchTerm(
        `${contact[0].firstName} ${contact[0].lastName} - ${contact[0].address}`
      );
    }

    setError("User already in alert list.");
  };

  const resetSuggestions = () => {
    setShowSuggestionArea(false);
    setSearchTerm("");
  };

  if (loading) return <S.RingLoader color="#ac1111" />;

  return (
    <S.DashboardContainer className="dashboard-container">
      <div className="dashboard-wrapper">
        <AlertSender sendList={sendList} />
        <SearchForm
          input={inputRef}
          searchTerm={searchTerm}
          getSearchTerm={getSearchTerm}
        />

        <ContactSuggestionList
          searchResults={searchResults}
          suggestionBox={suggestionBox}
          currentUserLocation={coordinates}
          addToSendList={addToSenderList}
          showSuggestionArea={showSuggestionArea}
          reset={resetSuggestions}
        />

        <PendingAlerts
          userId={currentUser._id}
          loading={loading}
          incomingAlert={incomingAlert}
          alertsCount={alertsCount}
          setAlertsCount={setAlertsCount}
        />
      </div>
    </S.DashboardContainer>
  );
};

export default Dashboard;
