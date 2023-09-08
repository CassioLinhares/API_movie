const Router = require("express");
const tagsRouter = Router();

const TagsControllers = require("../controllers/tags_controllers");
const tagsControllers = new TagsControllers();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

tagsRouter.use(ensureAuthenticated)

tagsRouter.get("/", tagsControllers.index);
tagsRouter.delete("/:id", tagsControllers.delete);

module.exports = tagsRouter;