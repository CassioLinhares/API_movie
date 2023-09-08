require("express-async-errors");
const uploadConfig = require("./config/upload");
const database = require("./database/sqlite");
const AppError = require("./utils/appError");
const express = require("express");
const routes = require("./routes");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER));

database();

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