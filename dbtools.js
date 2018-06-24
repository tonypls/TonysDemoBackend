var names = require("./db.json");

module.exports = {
  readData : function(){
    return JSON.parse(names);
  }
};
