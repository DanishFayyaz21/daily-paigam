const express = require("express");
const router = express.Router();

const WAC = require("./controller");
const verifyToken = require("../../middleware/auth.js");

router.post("/", verifyToken, WAC.create).get("/", verifyToken, WAC.find);
// .put("/", verifyToken, WAC.update)
// .delete("/", verifyToken, WAC.delete);

module.exports = router;
