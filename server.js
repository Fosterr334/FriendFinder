// DEPENDENCIES
var express = require("express");
// loads express
var exp = express();

// Sets up port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
exp.use(express.urlencoded({ extended: true }));
exp.use(express.json());

//Routes
require("./app/routing/apiRoutes.js")(exp);
require("./app/routing/htmlRoutes.js")(exp);

//Lisener
exp.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});