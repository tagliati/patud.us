var express = require('express');
var engines = require('consolidate');
var config = require("./config");
var app     = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.db);

app.set('views', __dirname + '/views');
app.engine('html', engines.handlebars);
app.set('view engine', 'html');

app.use("/static",express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.render("index");
});

app.get('/pet/:slug', function(req,res) {
    var slug = req.params.slug;
    db.get("SELECT * FROM pet WHERE slug = '"+slug+"';",function(err, row) {
        res.render("pet.html",{pet: row});
    });
});


app.listen(7200, function () {
	console.log('Up at 7200!');
});

