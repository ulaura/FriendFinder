//Loading data

// linking routes to data sources found in data/friends.js
var friends = require("../data/friends");


//Routing
module.exports = function(app) {
	//API GET request. Will display JSON of all possible friends
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	//API POST request. 
	app.post("/api/friends", function(req, res) {
		friends.push(req.body);
	})
};