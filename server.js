var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
       
     res.sendFile('pages/index.html');

});

app.listen(80);

console.log("Running at Port 80");
