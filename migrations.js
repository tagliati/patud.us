var config = require("./config");
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.db);

db.serialize(function(){
	db.run("CREATE TABLE if not exists pet (name TEXT,slug TEXT,description TEXT,age INTEGER,picture TEXT)");
	db.run("CREATE TABLE if not exists owner (name TEXT,phone TEXT,email TEXT)");
});
db.close();
