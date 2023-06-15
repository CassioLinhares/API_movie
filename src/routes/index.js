const { Router } = require("express");
const routes = Router();

const usersRouter = require("./users.router");
const notesRouter = require("./notes.router");
const tagsRouter = require("./tags.router");

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;