//external imports
const express = require("express");
const router = express.Router();

//internal imports
const { checkOut } = require("../controllers/PaymentController");

router.post("/checkout", checkOut);

//export
module.exports = router;
