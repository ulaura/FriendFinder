//adding path npm dependency
var path = require("path");

//Routing >> The GET Requests. 
//Showing the user an HTML page when they visit a site
//====================================================
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};