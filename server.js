const path = require("path");

const express = require("express");

const app = express()

const page = require("./app/routing/htmlRoutes.js");

const api = require("./app/routing/apiRoutes.js");

const dataFile = require("./app/data/friends.js");

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function(){
    console.log('App is listening on port: ' + PORT);
});



//========================================================================
//Routing Methods
//========================================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, page.home));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, page.survey));
});

app.get("/api/data", function(req, res){
    res.json(dataFile.userData);
});


//========================================================================
//Route for posting user submitted data into array declared in friends.js
//========================================================================
app.post("/api/data", function(req, res){
    var userRes = req.body;
    dataFile.userData.push(userRes);
    res.json(userRes);
});