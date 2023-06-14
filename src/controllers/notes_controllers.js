const knex = require("../database/knex");
const AppError = require("../utils/appError");

class notesController{
    async create(request, response){
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

        if (rating > 5 || rating < 0) {
            throw new AppError("Movie rating can vary between 1 and 5!");
        }

        const [notes_id] = await knex("notes").insert({title, description, rating, user_id});

        const tagsInsert = tags.map(name => {
            return {
                notes_id,
                user_id,
                name
            }
        });
        
        await knex("tags").insert(tagsInsert);

        return response.json();
    }

    async show(request, response){
        const { id } = request.params;

        const notes = await knex("notes").where({user_id: id}).first();
        const tags = await knex("tags").where({user_id: id}).orderBy("name");

        return response.json({
            ...notes, tags
        });
    }
}

module.exports = notesController;