const express = require("express");
const router = express.Router();
const {getUser}=require("../controllers/userController")

router.route("/").post(getUser)

module.exports = router;