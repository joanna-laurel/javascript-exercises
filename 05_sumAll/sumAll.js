const sumAll = function(num1, num2) {
    function isPositiveInteger(num) {
        return Number.isInteger(num) && num > 0;
    }
    
    if ((isPositiveInteger(num1) !== true) ||
        (isPositiveInteger(num2) !== true)) {
        return "ERROR";
    }

    if (num1 > num2) {
        largeNumber = num1; 
        smallNumber = num2;
    } else {
        smallNumber = num1;
        largeNumber = num2;
    }

    let sum = smallNumber;

    for (let i = smallNumber; i < largeNumber; i++) {
        sum += i + 1;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
