
const removeFromArray = function(someArray, ...subtractions) {
    //various ways to do this: https://www.geeksforgeeks.org/how-to-filter-an-array-from-all-elements-of-another-array-in-javascript/
    const newArray = someArray.filter(stuff => !subtractions.includes(stuff));
    return newArray;
   
};

// Do not edit below this line
module.exports = removeFromArray;
