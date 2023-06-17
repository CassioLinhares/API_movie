const Router = require("express");
const tagsRouter = Router();

const TagsControllers = require("../controllers/tags_controllers");
const tagsControllers = new TagsControllers();

tagsRouter.get("/:user_id", tagsControllers.index);
tagsRouter.delete("/:id", tagsControllers.delete);

module.exports = tagsRouter;