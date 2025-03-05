const fibonacci = function(num) {
    // > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
    // > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc. input returns array[input#]
    //0=0, 1=1, 2=1, 3=2, 4=3, 5=5, 6=8, 7=13, 8=21, 9=34
    num = +num
    if (num < 0) {return "OOPS"};
    //Fibonacci function
    const fibonacciArray = [0, 1];

    for (let i = 2; i <= num; i++) {
        fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
        fibonacciArray.push(fibonacciArray[i])
    }

    return fibonacciArray[num];
    //make it into an array

    //return array[]


};

// Do not edit below this line
module.exports = fibonacci;
