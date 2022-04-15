const authRoutes = require("../modules/authentication/routes");
const postRoutes = require("../modules/posts/routes");

module.exports = function router(app) {
  app.use("/auth", authRoutes);
  app.use("/posts", postRoutes);
};
