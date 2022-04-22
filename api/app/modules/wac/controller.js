const WAC = require("./model");
const Axios = require("axios");
var getFavicons = require("get-website-favicon");

exports.find = function (req, res) {
  const query = req.query;
  const data = new WAC(req.body);

  WAC.find(data, query, function (err, response) {
    if (err) res.send(err);
    else res.json(response);
  });
};

exports.create = function (req, res) {
  Axios.get(`http://${req.body.website}/dailypaigam.txt`).then((result) => {
    const { data } = result;

    if (data === req.body.text) {
      req.body.ip = req.headers["x-forwarded-for"];
      if (
        req.body.constructor === Object &&
        Object.keys(req.body).length === 0
      ) {
        res
          .status(400)
          .send({ error: 1, message: "Please provide all required field" });
      } else {
        getFavicons(req.body.website).then((result) => {
          const { icons } = result;

          req.body.icon = icons[0]?.src || "";
          const data = new WAC(req.body);
          WAC.create(data, function (err, response) {
            if (err) res.send(err);
            else res.json(response);
          });
        });
      }
    } else {
      res.send({ error: 1, message: "Domain Ownership Verification failed" });
    }
  });
};

exports.update = function (req, res) {
  const data = new WAC(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: 1, message: "Please provide all required field" });
  } else {
    WAC.update(data, function (err, response) {
      if (err) res.send(err);
      else res.json(response);
    });
  }
};

exports.delete = function (req, res) {
  const data = new WAC(req.body);
  WAC.delete(data, function (err, response) {
    if (err) res.send(err);
    else res.json(response);
  });
};
