const knex = require("../database/knex");
const AppError = require("../utils/appError");

class notesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

        if (rating > 5 || rating < 0) {
            throw new AppError("Movie rating can vary between 1 and 5!");
        }

        const [notes_id] = await knex("notes").insert({ title, description, rating, user_id });

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

    async show(request, response) {
        const { id } = request.params;

        const notes = await knex("notes").where({ user_id: id }).first();
        const tags = await knex("tags").where({ user_id: id }).orderBy("name");

        return response.json({
            ...notes, tags
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("notes").where({ id: id }).delete();

        return response.json();
    }

    async index(request, response) {
        const { user_id, title, tags } = request.query;
        let notes;

        if (tags) {
            const mapTags = tags.split(",").map(tag => tag.trim());

            notes = await knex("tags")
            .select([
                "notes.id", 
                "notes.user_id", 
                "notes.title", 
                "notes.description", 
                "notes.rating"
            ]) //extra information coming from "notes"
            .where("notes.user_id", user_id)
            .whereLike("notes.title", `%${title}%`)
            .whereIn("name", mapTags)//check inside field "name" exist the my tags.
            .innerJoin("notes", "notes.id", "tags.notes_id")//connection with table notes
            .orderBy("notes.title");

        } else {
            notes = await knex("notes")
                .where({ user_id })
                .whereLike("title", `%${title}%`)
                .orderBy("title");
        }

        const allTagsUser = await knex("tags").where("user_id", user_id);

        const notesWithTags = notes.map(note => {
            const notesTags = allTagsUser.filter(tag => tag.notes_id === note.id);
            return {
                ...note,
                tag: notesTags
            }
        })

        return response.json(notesWithTags);
    }
}

module.exports = notesController;