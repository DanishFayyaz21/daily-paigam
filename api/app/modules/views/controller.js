const Views = require("./model");
const Axios = require("axios");

exports.find = function (req, res) {
  const query = req.query;
  Views.find(query, function (err, response) {
    if (err) res.send(err);
    else res.json(response);
  });
};

exports.create = function (req, res) {
  req.body.ip = req.headers["x-forwarded-for"];
  const data = new Views(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: 1, message: "Please provide all required field" });
  } else {
    Views.create(data, function (err, response) {
      if (err) res.send(err);
      else res.json(response);
    });
  }
};

exports.update = function (req, res) {
  const data = new Views(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: 1, message: "Please provide all required field" });
  } else {
    Views.update(data, function (err, response) {
      if (err) res.send(err);
      else res.json(response);
    });
  }
};

exports.delete = function (req, res) {
  const data = new Views(req.body);
  Views.delete(data, function (err, response) {
    if (err) res.send(err);
    else res.json(response);
  });
};
