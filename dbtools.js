var peopleData = require("./db.json");

module.exports = {
  getNames : function(){
    var people;
    for (var i = 1; i < peopleData.people.length; i++){
      people += peopleData.people[i].name + " is " + peopleData.people[i].age + " years old and" +  peopleData.people[i].gender + ", ";
      }
    return people;
  }
  // getFemales : function(){
  //   var people;
  //   for (var i = 0; i < peopleData.people.length; i++){
  //     people += peopleData.people[i].name + " is " + peopleData.people[i].age;
  //   }
  //   return people;
  // },
  // getMales : function(){
  //   var people;
  //   for (var i = 0; i < peopleData.people.length; i++){
  //     people += peopleData.people[i].name + " is " + peopleData.people[i].age;
  //   }
  //   return people;
  // },
  // getOverAge : function(age){
  //   var people;
  //   for (var i = 0; i < peopleData.people.length; i++){
  //     people += peopleData.people[i].name + " is " + peopleData.people[i].age;
  //   }
  //   return people;
  // },
  // getUnderAge : function(age){
  //   var people;
  //   for (var i = 0; i < peopleData.people.length; i++){
  //     people += peopleData.people[i].name + " is " + peopleData.people[i].age;
  //   }
  //   return people;
  // }
};
