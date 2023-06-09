const knex = require("../database/knex");
const AppError = require("../utils/appError");
const hash = require("bcryptjs");

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

        const hashedPassword = await hash(password, 8)

        await knex("users").insert({name, email, hashedPassword});

        response.status(201).json();
    }
}

module.exports = userController;