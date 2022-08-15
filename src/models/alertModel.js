const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  emailAddress: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    minLength: 3,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
  },
  address: {
    type: String,
    required: true,
    minLength: 3,
  },
  image: String,
  viewed: Boolean,
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
