var names = require("./db.json");

module.exports = {
  readData : function(){
    people = JSON.parse(names);
    return people;
  }
};
