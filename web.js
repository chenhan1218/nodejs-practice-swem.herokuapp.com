
var port = process.env.PORT || 5000;
var express = require("express");
var app = express();
app.get('/', function(req, res) { 
    res.send("Hello Express Server 2013/3/12 4:56PM" + process.env.PORT);
    res.end();
}); 

app.listen(port);
