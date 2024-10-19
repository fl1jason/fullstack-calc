// create a new router
const api = require("express").Router();

// import the database object
const database = require("./database");

// set up a default route to server the index page
api.get("/", function (req, res) {
  res.json({
    status: "API is working",
    message: "Welcome to the API",
  });
});

// create a route to get all the data
api.get("/data", function (req, res) {
  // read the data from the database
  const data = database.readData();

  // send the data as a response
  res.json(data);
});

// create a route to add data
api.post("/data", function (req, res) {
  // read the data from the database
  const data = database.readData();

  // add the new data
  data.push(req.body);

  // write the data to the database
  database.writeData(data);

  // send a response
  res.json({ message: "Data added" });
});

// export the router
module.exports = api;
