var express = require("express");
var app     = express();
var path    = require("path");
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
       
     res.sendFile('pages/index.html');

});

app.listen(3000);

console.log("Running at Port 3000");
