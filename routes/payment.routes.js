const express = require("express");
const router = express.Router();
const { createCheckout } = require("../controllers/payment.controller");

router.post("/create-checkout", createCheckout);

module.exports = router;
