const User = require("../models/userModel");
const Alert = require("../models/alertModel");

const generateAlert = async (req, res) => {
  const { id, emailAddress, firstName, lastName, address, image } = req.body;
  try {
    const user = await User.findOne({ _id: "62ea763917931d21428ddc76" });
    const alert = Alert({
      userId: id,
      emailAddress: emailAddress,
      firstName: firstName,
      lastName: lastName,
      address: address,
      image: image,
    });

    await alert.save(async (err, alert) => {
      if (err) return res.send(err);

      user.alerts.push(alert);
      await user.save();

      res.send(user);
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchAlerts = async (req, res) => {
  const currentUserId = String(req.session.passport.user);

  if (!currentUserId) {
    res.status(403).send({ error: "Please login to continue." });
  }

  const user = await User.find({ _id: currentUserId }).populate("alerts");
  if (user[0].alerts.length > 0) return res.send(user[0].alerts);

  res.send([]);
};

module.exports = {
  generateAlert,
  fetchAlerts,
};
