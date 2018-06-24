// Database tools with logic for selecting males, females and over or under a given age

var peopleData = require("./db.json");

module.exports = {
  getNames : function(){
    var people ="";
    for (var i = 0; i < peopleData.people.length; i++){
      people += peopleData.people[i].name + " is " + peopleData.people[i].age + " years old and " +  peopleData.people[i].gender + ", ";
      }
    return people;
  },
  getFemales : function(){
    var people= "";
    for (var i = 0; i < peopleData.people.length; i++){
      if(peopleData.people[i].gender === "female"){
        people += peopleData.people[i].name + " ";
      }
    }
    return people;
  },
  getMales : function(){
    var people= "";
    for (var i = 0; i < peopleData.people.length; i++){
      if(peopleData.people[i].gender === "male"){
        people += peopleData.people[i].name + " ";
      }
    }
    return people;
  },
  getOverAge : function(age){
    var people= "";
    for (var i = 0; i < peopleData.people.length; i++){
      if(peopleData.people[i].age > age)
      people += peopleData.people[i].name + " ";
    }
    return people;
  },
  getUnderAge : function(age){
    var people= "";
    for (var i = 0; i < peopleData.people.length; i++){
      if(peopleData.people[i].age < age)
      people += peopleData.people[i].name + " ";
    }
    return people;
  }
};
