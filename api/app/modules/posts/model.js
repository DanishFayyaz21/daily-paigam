"use strict";
var conn = require("../../config/db.config");

var Posts = function (auth) {
  this.id = auth.id;
  this.userId = auth.userId;
  this.thumbnail = auth.thumbnail;
  this.title = auth.title;
  this.content = auth.content;
  this.category = auth.category;
  this.content = auth.content;
};

Posts.find = (data, result) => {};

Posts.create = (data, result) => {
  conn.query(
    "INSERT INTO posts SET (userId, thumbnail, title, category, content, status) VALUES (?, ?, ?, ?, ?, 1)",
    [data.userId, data.thumbnail, data.title, data.category, data.content],
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};

Posts.update = (data, result) => {};

Posts.delete = (data, result) => {};

module.exports = Posts;
