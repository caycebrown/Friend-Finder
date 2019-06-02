const path = require("path");

const express = require("express");

const app = express()

const page = require("./app/routing/htmlRoutes.js");

const api = require("./app/routing/apiRoutes.js");

const dataFile = require("./app/data/friends.js");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('App is listening on port: ' + PORT);
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, page.home));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, page.survey));
});

app.get("/api/data", function(req, res){
    res.json(dataFile.userData);
});


