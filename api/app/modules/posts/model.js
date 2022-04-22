"use strict";
var conn = require("../../config/db.config");

var Posts = function (auth) {
  this.id = auth.id;
  this.userId = auth.userId;
  this.thumbnail = auth.thumbnail;
  this.title = auth.title;
  this.content = auth.content;
  this.category = auth.category;
};

Posts.find = (data, query, result) => {
  conn.query(
    `SELECT posts.id, thumbnail, title, category, content,
     posts.createdAt, users.name, users.username,
     count(views.id) as total FROM posts
     INNER JOIN users ON users.id = posts.userid
     LEFT JOIN views ON views.post = posts.id
     WHERE posts.status = 1 and users.status IN ("Pending", "Verified")
     ${query.id ? `AND posts.id = ${parseInt(query.id)}` : ""}
     GROUP BY posts.id
     ${
       query.limit
         ? `LIMIT ${parseInt(query.page * query.limit)}, ${parseInt(
             query.limit
           )}`
         : ""
     }`,
    (err, res) => {
      if (err) result(err, null);
      else result(null, res);
    }
  );
};

Posts.create = (data, result) => {
  conn.query(
    "INSERT INTO posts (userId, thumbnail, title, category, content, status) VALUES (?, ?, ?, ?, ?, 1)",
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
