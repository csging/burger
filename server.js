const express = require("express");
const bodyParser = require("body-parser");
var exports = module.exports = {};
// const fs = require('fs');
const exphbs = require("express-handlebars");
const app = express();
const router = require('./controllers/burger_controllers.js');
var orm = require("../burger/config/orm.js");
// const routes = require("routes")

const routes = require('./routes.js');
const PORT = 9001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(routes)(app);

app.listen(PORT, (stuff) => console.log("Listening on Port: " + PORT))

orm.selectAll();
orm.updateOne();
orm.insertOne();