const add = function(x, y) {
	return (+x + +y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(array) {
	let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let product = 1;
  for (i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(base, exponent) {
	return (base ** exponent);
};

const factorial = function(integer) {
	
  if (integer === 0) {return 1}
  //the product of an integer and all integers below it
  //number of iterations should be num - 1
  
  for (i = integer; i > 1; i--) {
    integer *= (i - 1);
  }
  return integer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
