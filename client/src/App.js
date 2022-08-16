import React, { useContext } from "react";
import axios from "axios";
import Router from "./Router";
import { useCurrentUser } from "./context/UserContext";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
