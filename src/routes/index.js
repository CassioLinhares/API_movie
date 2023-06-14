const { Router } = require("express");
const routes = Router();

const usersRouter = require("./users.router");
const notesRouter = require("./notes.router");

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes;