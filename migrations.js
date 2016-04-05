var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('pet.db');

db.serialize(function(){
	db.run("CREATE TABLE if not exists pet (name TEXT,slug TEXT,description TEXT,age INTEGER)");
	db.run("CREATE TABLE if not exists owner (name TEXT,phone TEXT,email TEXT)");
});
db.close();
