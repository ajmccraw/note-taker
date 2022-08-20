const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;


// data from string and/or arry will be parsed
app.use(express.urlencoded({extended: true}));

//incoming JSON info will be analyzed into its parts
app.use(express.json());