"use strict";

var conn = require("../../config/db.config");

var Auth = function (auth) {
  this.id = auth.id;
  this.name = auth.name;
  this.username = auth.username;
  this.password = auth.password;
  this.email = auth.email;
};

Auth.create = (data, callback) => {
  const sql = `INSERT INTO users SET name = ?, email = ?, username = ?, password = ?`;
  const user = [data.name, data.email, data.username, data.password];
  conn.query(sql, user, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = Auth;
