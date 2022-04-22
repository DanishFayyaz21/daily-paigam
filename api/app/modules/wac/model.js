"use strict";
var conn = require("../../config/db.config");

var WAC = function (auth) {
  this.id = auth.id;
  this.userId = auth.userId;
  this.domain = auth.website;
  this.icon = auth.icon;
  this.ip = auth.ip;
};

WAC.find = (data, query, result) => {
  const sql = `SELECT * FROM wac WHERE user = ? ${
    query.limit
      ? `LIMIT ${parseInt(query.page * query.limit)}, ${parseInt(query.limit)}`
      : ""
  }`;
  conn.query(sql, [data.userId], (err, res) => {
    if (err) result(err, null);
    else result(null, res);
  });
};

WAC.create = (data, result) => {
  conn.query(
    "INSERT INTO `wac`(`user`, `domain`, `icon`, `ip`) VALUES (?, ?, ?, ?)",
    [data.userId, data.domain, data.icon, data.ip],
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};

WAC.update = (data, result) => {};

WAC.delete = (data, result) => {};

module.exports = WAC;
