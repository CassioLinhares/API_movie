const Router = require("express");
const routes = Router();

const userRouter = require("./user.router");

routes.use("/users", userRouter);

module.exports = routes;