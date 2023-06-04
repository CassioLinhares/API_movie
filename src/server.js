require("express-async-errors");

const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);












const Port = 3333;
app.listen(Port, () => console.log(`API is running on Port ${Port}`));