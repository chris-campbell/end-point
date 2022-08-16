import React, { useContext } from "react";
import axios from "axios";
import Router from "./Router";
import { useCurrentUser } from "./context/UserContext";
import "./index.css";
import Navbar1 from "./components/Navbar/Navbar1";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Navbar1 />
      <Router />
    </div>
  );
}

export default App;
