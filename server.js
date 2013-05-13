var express = require('express'),
    path = require('path'),
    http = require('http'),
    wine = require('./routes/nodecellar/wines');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/nodecellar/wines', wine.findAll);
app.get('/nodecellar/wines/:id', wine.findById);
app.post('/nodecellar/wines', wine.addWine);
app.put('/nodecellar/wines/:id', wine.updateWine);
app.delete('/nodecellar/wines/:id', wine.deleteWine);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
