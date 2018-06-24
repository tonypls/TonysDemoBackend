var names = require("./db.json");

module.exports = {
  getNames : function(){
    var people;
    for (var i = 0; i < names.length; i++){
      people += names[i].name + " is " + names[i].age;
    }
    return people;
  }
};
