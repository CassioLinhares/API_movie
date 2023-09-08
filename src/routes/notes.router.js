const Router = require("express");
const notesRouter = Router();

const NotesController = require("../controllers/notes_controllers");
const notesController = new NotesController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");
notesRouter.use(ensureAuthenticated);

notesRouter.post("/", notesController.create);
notesRouter.get("/:id", notesController.show);
notesRouter.delete("/:id", notesController.delete);
notesRouter.get("/", notesController.index);

module.exports = notesRouter;