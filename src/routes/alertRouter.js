const express = require("express");
const router = express.Router();
const alertController = require("../controllers/alertController");

router.post("/generateAlert", alertController.generateAlert);
router.post("/fetchAlerts", alertController.fetchAlerts);

module.exports = router;
