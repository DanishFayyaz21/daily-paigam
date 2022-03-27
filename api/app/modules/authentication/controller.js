const Auth = require("./model");

exports.create = function (req, res) {
  const data = new Auth(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: 1, message: "Please provide all required field" });
  } else {
    Auth.create(data, function (err, response) {
      if (err) res.send(err);
      res.json(response);
    });
  }
};
