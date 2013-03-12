r express = require("express");
var app = express();
app.get('/', function(req, res) { 
    res.send("Hello Express Server 2013/3/12 4:36PM");
    res.end();
}); 

app.listen(8800);
