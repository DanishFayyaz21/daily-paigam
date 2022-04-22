const express = require("express");
const router = express.Router();

const Views = require("./controller");
const verifyToken = require("../../middleware/auth.js");

router.post("/", Views.create);
// .get("/", Views.find)
// .put("/", verifyToken, Views.update)
// .delete("/", verifyToken, Views.delete);

module.exports = router;
