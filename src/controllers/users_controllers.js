const knex = require("../database/knex");
const AppError = require("../utils/appError");

class userController{
    
    async create(request, response){
        const {name, email, password} = request.body;
        const checkedUserExists = await knex("users").where({email:email});

        if(checkedUserExists){
            throw new AppError('E-mail is in use!');
        }
        if(!name || !password){
            throw new AppError('Please, name and password fields are mandatory');
        }

        await knex("users").insert({name, email, password});
    }
}