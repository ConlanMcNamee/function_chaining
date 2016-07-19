/*
This function will take an object as its only parameter and then chain
a set list of funcitons depending on what data is available. It's ver simplistic
in what it actually does to the data, but it the functions run on the data
could be much more complex. 
*/

module.exports = function(obj) {
  var newObject = {};
  if(obj.firstName && obj.lastName) {
    var newName = "";

    function scrambleName(string) {
      var newString = "";
      for(var i = 0; i < string.length; i++) {
        newString += string[Math.floor((Math.random() * string.length) + 1)];
      }
      return newString;
    }

    newName = scrambleName(obj.firstName) + " " + scrambleName(obj.lastName);
    newObject.newName = newName;
  }
  if(obj.bDay) {
    newObject.randomNumber = obj.bDay + obj.bMonth + obj.bYear;
  }
  if(obj.occupation) {
    newObject.jobString = "That's cool you're a " + obj.occupation;
  }
  return newObject;
}
