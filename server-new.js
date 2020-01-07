var express                 = require('express');
var bodyParser              = require('body-parser');
var http                    = require('http');
var portNumber              = 7000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(methodOverride());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    };
});

app.get('/', function(req, res){
    res.send('Welcome to DigipatCustomeApi');
});

//Create server
http.createServer(app).listen(portNumber);
console.log('server running at PORT [%d]', portNumber);
