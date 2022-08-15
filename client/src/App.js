import React, { useContext } from "react";
import axios from "axios";
import Router from "./Router";
import { useCurrentUser } from "./context/UserContext";
import "./index.css";

axios.defaults.withCredentials = true;

function App() {
  return <Router />;
}

export default App;
