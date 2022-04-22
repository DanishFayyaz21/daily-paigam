const authRoutes = require("../modules/authentication/routes");
const postRoutes = require("../modules/posts/routes");
const viewRoutes = require("../modules/views/routes");

const uploadRoutes = require("../modules/images/routes");

const wacRoutes = require("../modules/wac/routes");

module.exports = function router(app) {
  app
    .use("/auth", authRoutes)
    .use("/posts", postRoutes)
    .use("/views", viewRoutes)

    .use("/upload", uploadRoutes)

    .use("/wac", wacRoutes);
};
