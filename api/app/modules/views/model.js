"use strict";
var conn = require("../../config/db.config");

var Views = function (auth) {
  this.id = auth.id;
  this.post = auth.post;
  this.ip = auth.ip;
};

Views.find = (query, result) => {
  conn.query(`SELECT * FROM views`, [query.id], (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};

Views.create = (data, result) => {
  conn.query(
    "INSERT INTO `views`(`post`, `ip`) VALUES (?, ?)",
    [data.post, data.ip],
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};

Views.update = (data, result) => {};

Views.delete = (data, result) => {};

module.exports = Views;
