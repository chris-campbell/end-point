import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCurrentUser } from "../../context/UserContext";
import { Audio } from "react-loader-spinner";
import slugify from "react-slugify";

import AlertSender from "./components/alertSender/AlertSender";
import SearchForm from "./components/searchForm/SearchForm";
import ContactSuggestionList from "./components/contactSuggestionList/ContactSuggestionList";
import PendingAlerts from "./components/pendingAlerts/PendingAlerts";

import axiosClient from "../../utils/apiClient";
import useCoordinates from "../../hooks/coordinates";

import searchHandler from "./js/searchHandler";
import { ws } from "./js/socket";

const Dashboard = () => {
  const [sendList, setSendList] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [incomingAlert, setIncomingAlert] = useState([]);
  const [showSuggestionArea, setShowSuggestionArea] = useState(false);
  const suggestionBox = useRef(null);

  const { setAuth } = useAuth();
  const { currentUser, loading } = useCurrentUser();
  const { userCoordinates, isLoading } = useCoordinates();
  const location = useLocation();

  const inputRef = useRef(null);
  const socket = useRef(ws);
  const credentials = { withCredentials: true };

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await axiosClient.get("/getAllUsers", credentials);
      setContacts(data);
    };

    fetchContacts();
  }, [location.pathname]);

  useEffect(() => {
    socket.current.on("send_alert", (res) => {
      console.log(alert);
      setIncomingAlert(res.alerts);
    });
  }, []);

  useEffect(() => {
    const attachSocket = async () => {
      const { _id, firstName, lastName } = currentUser;

      const userData = {
        id: _id,
        socketId: socket.current.id,
        userName: slugify(`${firstName} ${lastName}`),
      };

      try {
        await axiosClient.post("/addSocket", userData, credentials);
      } catch (error) {
        console.log(error.response);
      }
    };

    currentUser && attachSocket();
  }, [socket, currentUser, location.pathname]);

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

  const getUser = (e) => {
    const userId = e.currentTarget.getAttribute("data-id");

    // Gets user from fetched list retrieved from DB
    const user = contacts.filter((user) => user._id === userId);
    const sendUsers = sendList.filter((user) => user._id === userId);

    // Check if user already in send list
    if (sendUsers.length === 0) {
      setSendList((sendList) => [...sendList, user[0]]);
      return setSearchTerm(
        `${user[0].firstName} ${user[0].lastName} - ${user[0].address}`
      );
    }

    console.log("User already in alert list (replace with alert");
  };

  if (loading) return <Audio />;

  return (
    <div className="dashboard-container">
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
          addToSendList={getUser}
        />

        <PendingAlerts
          userId={currentUser._id}
          loading={loading}
          incomingAlert={incomingAlert}
        />

        <button onClick>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
