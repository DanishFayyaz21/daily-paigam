const express = require("express");
const router = express.Router();

const Auth = require("./controller");
const verifyToken = require("../../middleware/auth.js");

router.post("/", Auth.create);
router.get("/", Auth.find);
router.get("/verify", verifyToken, Auth.verify);

module.exports = router;
