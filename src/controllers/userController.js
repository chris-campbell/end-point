const User = require("../models/userModel");
const passport = require("passport");
const errorMessages = require("./errorMessages");

const createUser = (req, res) => {
  User.findOne({ emailAddress: req.body.emailAddress }, async (err, user) => {
    try {
      if (user) {
        res.status(309).send(errorMessages.duplicateEmail);
      }

      if (!user) {
        let newUser = User(req.body);
        newUser = await newUser.save();

        req.login(newUser, (err) => {
          if (err) {
            return res.status(309).send(err);
          }
          return res.json(newUser);
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
};

const loginUser = (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(309).send(err);

    if (info) {
      if (info.message === "Missing credentials") {
        return res.status(401).send(errorMessages.missingCredentials);
      }
    }

    if (!user) {
      return res.status(401).send(errorMessages.unauthorizedUser);
    }

    req.logIn(user, (err) => {
      if (err) {
        res.send(err);
      }

      return res.json(req.user);
    });
  })(req, res);
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.send(users);
};

const isUserLoggedIn = async (req, res) => {
  if (!req.isAuthenticated()) return res.send(false);

  res.send(true);
};

const checkEmailUnique = async (req, res) => {
  try {
    const user = await User.findOne({ emailAddress: req.body.emailAddress });

    if (user) {
      return res.json(false);
    }

    res.json(true);
  } catch (err) {
    res.status(500).json({ errorMessage: "Server Issue" });
  }
};

const logoutUser = async (req, res) => {
  req.logout((err) => {
    if (err) return res.send(err);

    delete req.session;
    res.send("Noo please come back");
  });
};

const getCurrentUser = async (req, res) => {
  if (!req.user) return res.send(undefined);

  res.send(req.user);
};

const addSocket = async (req, res) => {
  const { id, socketId, userName } = req.body;

  try {
    User.findByIdAndUpdate(
      { _id: id },
      { socket: { socketId, userName } },
      (err, user) => {
        if (err) return res.send(500, { error: err });
        return res.send(user);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  loginUser,
  checkEmailUnique,
  logoutUser,
  isUserLoggedIn,
  getCurrentUser,
  addSocket,
};
