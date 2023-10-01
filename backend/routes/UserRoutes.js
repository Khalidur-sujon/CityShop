//external imports
const express = require("express");
const router = express.Router();

//internal imports
const { userSignUp, userLogin } = require("../controllers/UserController");

router.post("/signUp", userSignUp);
router.post("/login", userLogin);

//export
module.exports = router;
