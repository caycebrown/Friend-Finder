const path = require("path");

const express = require("express");

const app = express()

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('App is listening on port: ' + PORT);
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});
