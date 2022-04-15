const express = require("express");
const router = express.Router();

const Auth = require("./controller");
const verifyToken = require("../../middleware/auth.js");

router
  .post("/", Auth.create)
  .get("/", Auth.find)
  .get("/verify", verifyToken, Auth.verify);

module.exports = router;
