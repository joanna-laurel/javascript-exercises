const findTheOldest = function(thePeople) {
    const stillAlive = new Date().getFullYear();

    for (i = 0; i < thePeople.length; i++) {
      if (thePeople[i].yearOfDeath === undefined) {
          thePeople[i].yearOfDeath = stillAlive;
      }
    }

    const addAges = thePeople.map(person =>
      [person.name, 
       person.age = person.yearOfDeath - person.yearOfBirth])
    
    const justAges = addAges.map(person => [person[1]])

    for (i = 0; i < addAges.length; i++) {
      if (addAges[i][1] === Math.max(...justAges)) {return (thePeople[i])}}
};

// Do not edit below this line
module.exports = findTheOldest;
