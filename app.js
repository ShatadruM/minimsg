//installing packages
const express = require("express");
const path = require("path");


const indexRouter = require("./routes/index");


const app = express();

//ejs set up
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use("/", indexRouter);




const PORT = 5000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
