var express = require("express");
// database models
const db = require ('../models');
let router = express.Router();


console.log("post api page works");
router.post('/', (req, res) => {
	console.log("api add worked")
	console.log(req.body)
	db.Cart_items.create(req.body).then((dbUser)=> {

	});
});
module.exports = router;