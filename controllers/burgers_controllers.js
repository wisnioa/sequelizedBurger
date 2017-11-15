var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//rOOT ROUTE
router.get("/", function (req, res) {
	res.redirect("/burgers");
});


router.get("/burgers", function (req, res) {
	// console.log("batman");
	burger.all(function (data) { //burger references the require burgers.js file
		var burgerObject = {
			burgers: data
		}
		console.log(burgerObject)
		res.render("index", burgerObject) // rendering the burgerObject to the index.handlebar file
	});
});

router.post('/burgers/create', function (req, res) {
	console.log("about to create a new burger!")
	console.log(req.body.name);
	//req.body.name - must match the name sent from handle bars
	burger.create(
		["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
		function (result) {
			// res.json({
			// 	id: result.insertId
			// })
			res.redirect("/burgers");
		});
});

router.post("/burgers/update", function (req, res) { //...THIS...SHOULD WORK
	var condition = req.body.burger_id;
	console.log("condition", condition);
	console.log("Put request received");
	burger.update("devoured", condition, function (result) {
		// res.json({
		// 	id: result.insertId
		// })
		res.redirect("/burgers");
	});
});



// Export routes for server.js to use.
module.exports = router;