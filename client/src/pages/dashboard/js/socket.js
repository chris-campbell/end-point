import io from "socket.io-client";

const ENDPOINT = "https://uppoint-socket.herokuapp.com ";

const ws = io.connect(ENDPOINT, {
  query: {
    user: localStorage.getItem("user"),
  },
});

export { ws };
