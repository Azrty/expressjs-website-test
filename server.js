var express = require("express");
var app     = express();
var path    = require("path");
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
       
     res.sendFile('index.html');

});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
