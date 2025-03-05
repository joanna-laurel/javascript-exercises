
const repeatString = function(string, num) {
    if (num < 0) {return "ERROR";}
    const wordArray = [];
    
    for (i = 0; i < num; i++) {
        wordArray.push(string);
    }
    return wordArray.join("");
};

// Do not edit below this line
module.exports = repeatString;
