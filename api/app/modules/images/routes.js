const express = require("express");
const router = express.Router();

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

var single = multer({ storage: storage }).single("image");
var multi = multer({ storage: storage }).array("images");

router.post("/single", verifyToken, single, (req, res) => res.json(req.file));
router.post("/multi", verifyToken, multi, (req, res) => res.json(req.files));

module.exports = router;
