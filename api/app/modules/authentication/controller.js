const Auth = require("./model");

const saltRounds = 10;
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const app = require("../../config/app.config");

exports.create = function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, (err, hashed) => {
    req.body.password = hashed;
    const data = new Auth(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ error: 1, message: "Please provide all required field" });
    } else {
      Auth.create(data, function (err, response) {
        if (err) res.send(err);
        else {
          response.id = jwt.sign({ id: response.insertId }, app.jwt, {
            expiresIn: 60 * 60 * 72,
          });
          res.json(response);
        }
      });
    }
  });
};

exports.find = function (req, res) {
  const data = new Auth(req.query);
  Auth.findByUsername(data, function (err, response) {
    bcrypt.compare(data.password, response.password, (err, result) => {
      if (result) {
        delete response.password;
        delete response.createdAt;
        delete response.deletedAt;
        response.id = jwt.sign({ id: response.id }, app.jwt, {
          expiresIn: 60 * 60 * 72,
        });
        res.json(response);
      } else {
        res.send({ error: 1, message: "Incorrect Username or Password" });
      }
    });
  });
};

exports.verify = function (req, res) {
  req.body.id = req.body.userId;
  const data = new Auth(req.body);
  Auth.findById(data, function (err, response) {
    if (err) res.send(err);
    response.error = false;
    res.json(response);
  });
};
