// set up express
const express = require("express");

// import the api routes
const api = require("./api");

// set up express app
const app = express();

// set up the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

// set up a default route to server the index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.htm");
});

// use the api router
app.use("/api", api);

// start the server
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
