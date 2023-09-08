const knex = require("../database/knex");

class tagsControllers{
    async index(request, response){
        const user_id = request.user.id;

        const tags = await knex("tags").where({user_id});

        return response.json(tags)
    }

    async delete(request, response){
        const user_id = request.user.id;

        await knex("tags").where({id: user_id}).delete();

        return response.json();
    }
}

module.exports = tagsControllers;