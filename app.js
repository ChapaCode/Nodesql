const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const customer = require("./route/customers");

app.use(bodyParser.json());



app.use(express.json());


app.use("/api/v1",customer);




module.exports = app;