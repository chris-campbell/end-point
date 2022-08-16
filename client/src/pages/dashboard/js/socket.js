import io from "socket.io-client";

const ENDPOINT = "http://localhost:4000";

const ws = io.connect(ENDPOINT, {
  query: {
    user: localStorage.getItem("user"),
  },
});

export { ws };
