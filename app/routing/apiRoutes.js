// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var userData = require("../data/friends.js");
console.log("test");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    console.log(`Got the data in the GET
    ${userData}`)
    res.json(userData);
  });

  // API POST Requests
    app.post("/api/survey", function(req, res) {
    console.log(`Got the data in the POST
    ${userData}`)

  });
};
