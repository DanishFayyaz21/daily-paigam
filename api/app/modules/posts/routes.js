const express = require("express");
const router = express.Router();

const Posts = require("./controller");
const verifyToken = require("../../middleware/auth.js");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("thumbnail");

router
  .post("/", verifyToken, upload, Posts.create)
  .get("/", verifyToken, Posts.find)
  .put("/", verifyToken, Posts.update)
  .delete("/", verifyToken, Posts.delete);

module.exports = router;
