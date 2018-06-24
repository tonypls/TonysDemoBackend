var names = require("./db.json");

module.exports = {
  getNames : function(){
    var people;
    for (var i = 0; i < names.length; i++){
      people += names.people[i].name + " is " + names.people[i].age;
      console.log(people);
    }
    return people;
  }
  // getFemales : function(){
  //   var people;
  //   for (var i = 0; i < names.length; i++){
  //     people += names[i].name + " is " + names[i].age;
  //   }
  //   return people;
  // },
  // getMales : function(){
  //   var people;
  //   for (var i = 0; i < names.length; i++){
  //     people += names[i].name + " is " + names[i].age;
  //   }
  //   return people;
  // },
  // getOverAge : function(age){
  //   var people;
  //   for (var i = 0; i < names.length; i++){
  //     people += names[i].name + " is " + names[i].age;
  //   }
  //   return people;
  // },
  // getUnderAge : function(age){
  //   var people;
  //   for (var i = 0; i < names.length; i++){
  //     people += names[i].name + " is " + names[i].age;
  //   }
  //   return people;
  // }
};
