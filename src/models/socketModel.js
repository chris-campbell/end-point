const mongoose = require("mongoose");

const socketSchema = new mongoose.Schema({
  userName: String,
  socketId: String,
});

const Socket = mongoose.model("Socket", socketSchema);

module.exports = Socket;
