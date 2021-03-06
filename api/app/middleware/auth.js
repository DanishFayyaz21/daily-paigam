var jwt = require("jsonwebtoken");
var app = require("../config/app.config");
const jwtSecret = app.jwt;

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (decoded?.id) {
      req.body.userId = decoded.id;
      next();
    } else {
      res.json({ error: true, message: "Authentication Failed" });
    }
  });
};

module.exports = verifyToken;
