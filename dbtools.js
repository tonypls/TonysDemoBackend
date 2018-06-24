var names = require("./db.json");

module.exports = {
  readData : function(){
    var people = names//JSON.parse(names);
    return people;
  }
};
