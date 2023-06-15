const knex = require("../database/knex");

class tagsControllers{
    async index(request, response){
        const {user_id} = request.params;

        const tags = await knex("tags").where("user_id", user_id);

        return response.json(tags)
    }
}

module.exports = tagsControllers;