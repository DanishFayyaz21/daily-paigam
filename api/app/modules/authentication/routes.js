const express = require("express");
const router = express.Router();

const Auth = require("./controller");

router.post("/", Auth.create);

module.exports = router;
