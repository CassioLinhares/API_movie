const Router = require("express");
const notesRouter = Router();

const NotesController = require("../controllers/notes_controllers");
const notesController = new NotesController();

notesRouter.post("/:user_id", notesController.create);
notesRouter.get("/:id", notesController.show);

module.exports = notesRouter;