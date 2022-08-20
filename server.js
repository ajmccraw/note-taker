const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;


// data from string and/or arry will be parsed
app.use(express.urlencoded({extended: true}));

//incoming JSON info will be analyzed into its parts
app.use(express.json());

// Linking to routes - api
app.use("/api", apiRoutes);

// Linking to routes - html
app.use("/", htmlRoutes);

// public folder
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`Server for API is available for ${PORT}`)
})



