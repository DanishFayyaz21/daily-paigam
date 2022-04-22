const express = require("express");
const router = express.Router();

const Posts = require("./controller");
const verifyToken = require("../../middleware/auth.js");

router
  .post("/", verifyToken, Posts.create)
  .get("/", Posts.find)
  .put("/", verifyToken, Posts.update)
  .delete("/", verifyToken, Posts.delete);

module.exports = router;
