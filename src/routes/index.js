const { Router } = require("express");
const routes = Router();

const usersRouter = require("./users.router");

routes.use("/users", usersRouter);

module.exports = routes;