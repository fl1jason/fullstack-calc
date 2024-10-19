// import the node file system module
const fs = require("fs");

// import the path module
const path = require("path");

const database = {
  // set up a path to the data.json file
  dataFile: path.join(__dirname, "data.json"),

  // create a method to read the data from the data.json file
  readData: function () {
    // read the data from the data.json file
    return JSON.parse(fs.readFileSync(this.dataFile, "utf8"));
  },

  // create a method to write the data to the data.json file
  writeData: function (data) {
    // write the data to the data.json file
    fs.writeFileSync(this.dataFile, JSON.stringify(data, null, 2));
  },
};

// export the database object
module.exports = database;
