const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");
const { updatePrice } = require("../controllers/admin.controller");

router.post("/update-plan", auth, isAdmin, updatePrice);

module.exports = router;
