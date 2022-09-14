import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://uppoint-socket.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

export default axiosClient;
