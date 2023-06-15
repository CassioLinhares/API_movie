const Router = require("express");
const tagsRouter = Router();

const TagsControllers = require("../controllers/tags_controllers");
const tagsControllers = new TagsControllers();

tagsRouter.get("/:user_id", tagsControllers.index);

module.exports = tagsRouter;