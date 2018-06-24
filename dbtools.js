var names = require("./db.json");

module.exports = {
  function readData(){
    return JSON.parse(names);
  }
};
