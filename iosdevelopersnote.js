var express = require("express");
var app = express.createServer(express.logger());

var port = process.env.PORT || 8800;


app.get('/', function(req, res) { 
    res.send("Hello Express Server" + process.env.PORT + 8800);
    res.end();
}); 

app.listen(port, function() {
  console.log("Listening on " + port);
});
