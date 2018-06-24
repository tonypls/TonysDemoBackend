var peopleData = require("./db.json");

module.exports = {
  getNames : function(){
    var people;
    for (var i = 0; i < peopleData.people.length; i++){
      people += peopleData.people[i].name + " is an" + peopleData.people[i].age + " year old " +  peopleData.people[i].gender + ", ";
      console.log(people);
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
