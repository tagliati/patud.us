var config = require("./config");
var qr = require('qr-image');
var sqlite3 = require('sqlite3').verbose();
var randomstring = require("randomstring");

var db = new sqlite3.Database(config.db);

var slug =  randomstring.generate(config.slugSize);
var qrimage = qr.image(config.domain+"/"+slug, { type: 'svg',size: 7 });
qrimage.pipe(require('fs').createWriteStream(slug+'.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
var stmt = db.prepare("INSERT INTO pet VALUES (?,?,?,?)");
stmt.run("Charles Barkin",slug,"Fluff,smart and beatiful",7);
stmt.finalize();
