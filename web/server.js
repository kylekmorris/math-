
var express = require('express');
var app = express();

// express.js config
app.set('view engine', 'ejs');
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(8081);
