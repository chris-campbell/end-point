const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/createUser", userController.createUser);
router.get("/getAllUsers", userController.getAllUsers);
router.post("/checkEmailUnique", userController.checkEmailUnique);
router.post("/loginUser", userController.loginUser);
router.delete("/logoutUser", userController.logoutUser);
router.get("/isUserLoggedIn", userController.isUserLoggedIn);
router.get("/getCurrentUser", userController.getCurrentUser);
router.post("/addSocket", userController.addSocket);

module.exports = router;
