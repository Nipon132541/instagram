var express = require('express');
var app = express();
var data = require('./data.json');

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/Home', { profile: data });
});

app.get('/students', function (req, res) {
    res.render('pages/students', { profile: data });
});

app.listen(8000);