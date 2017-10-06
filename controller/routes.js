// var express = require('express');
// var app = express();


module.exports = function(app) {
	console.log("this works")
	app.get("/index", function(req, res) {
		res.sendFile("../public/index.html")
	});
}	