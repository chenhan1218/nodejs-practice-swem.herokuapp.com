
var port = process.env.PORT || 5000;
r express = require("express");
var app = express();
app.get('/', function(req, res) { 
    res.send("Hello Express Server 2013/3/12 4:36PM" + process.env.PORT);
    res.end();
}); 

var port = process.env.PORT || 5000;

app.listen(port);
