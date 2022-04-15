const Posts = require("./model");

exports.find = function (req, res) {
  const data = new Posts(req.body);
  Posts.find(data, function (err, response) {
    if (err) res.send(err);
    else res.json(response);
  });
};

exports.create = function (req, res) {
  console.log(req.body);
  req.body.thumbnail = req.file?.filename || "";
  const data = new Posts(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: 1, message: "Please provide all required field" });
  } else {
    Posts.create(data, function (err, response) {
      if (err) res.send(err);
      else res.json(response);
    });
  }
};

exports.update = function (req, res) {
  const data = new Posts(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: 1, message: "Please provide all required field" });
  } else {
    Posts.update(data, function (err, response) {
      if (err) res.send(err);
      else res.json(response);
    });
  }
};

exports.delete = function (req, res) {
  const data = new Posts(req.body);
  Posts.delete(data, function (err, response) {
    if (err) res.send(err);
    else res.json(response);
  });
};
