require("dotenv").config();
require("./src/db/mongoose.js");

const Alert = require("./src/models/alertModel");

const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

// Initializing the server
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "https://uppoint-socket.herokuapp.com", credentials: true },
});

// Core Application middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require("cors");
app.use(
  cors({ origin: ["https://uppoint-socket.herokuapp.com"], credentials: true })
);
app.use(fileUpload());

// Session Configurations
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MDB_CONNECTION_URL,
  collection: "sessions",
});

store.on("error", (error) => {
  console.log("SESSION ERROR", error);
});

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 180 * 60 * 1000, httpOnly: false },
  store: store,
  unset: "destroy",
});

app.use(sessionMiddleware);

// Passport implementation
const passport = require("passport");
require("./src/passport-config")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Socket connect
io.on("connection", async (socket) => {
  console.log("New user connect with ID: " + socket.id);

  socket.on("send", (sendData) => {
    const { sendList, alertData } = sendData;

    const alert = {
      userId: alertData._id,
      firstName: alertData.firstName,
      lastName: alertData.lastName,
      emailAddress: alertData.emailAddress,
      address: alertData.address,
      image: alertData.image,
    };

    if (!sendList.length > 0) return console.log("Send list empty");

    sendList.forEach(async (user) => {
      try {
        const verifedUser = await User.findById(user._id);

        if (!verifedUser) {
          return;
        }

        const newAlert = Alert(alert);

        await newAlert.save(async (err, alert) => {
          if (err) return console.log(err);

          verifedUser.alerts.push(alert);
          verifedUser.save(async (err, user) => {
            if (err) return console.log(err);

            const alerts = await User.find({ _id: user._id }).populate(
              "alerts"
            );

            const sendAlert = { alert, alerts };
            socket
              .to(verifedUser.socket.socketId)
              .emit("send_alert", sendAlert);
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  });

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.id);
  });
});

// Application routes
const userRoutes = require("./src/routes/userRouter.js");
const alertRoutes = require("./src/routes/alertRouter.js");
const User = require("./src/models/userModel.js");

// Routes middleware
app.use("/", userRoutes);
app.use("/", alertRoutes);

//-----------------Deployment--------------------------

if (process.env.NODE_ENV === "production") {
  //Set Staticfolder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server
const PORT = process.env.PORT || 4000;
http.listen(PORT, () => {
  console.log(
    "Connection success: ",
    `WebSocket is now running on port ${PORT}`
  );
});
