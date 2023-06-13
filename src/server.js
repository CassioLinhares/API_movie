require("express-async-errors");
const AppError = require("./utils/appError");

const database = require("./database/sqlite");
database();

const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(routes);


app.use((error, request, response, next) => { //error of client
    if (error instanceof AppError) { // if the error comes from appError
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        }); 
    }
    
    console.error(error);

    return response.status(500).json({ //error of server
        status: "error",
        message: "Internal server error"
    })

});

const Port = 3333;
app.listen(Port, () => console.log(`API is running on Port ${Port}`));