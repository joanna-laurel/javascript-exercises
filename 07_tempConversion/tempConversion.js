const convertToCelsius = function(tempFahrenheit) {
  //C = (F - 32) x 5/9
  return (Math.round(((tempFahrenheit - 32) * 5 / 9) * 10) / 10);

};

//both need to round to one decimal and work with negative #s

const convertToFahrenheit = function(tempCelsius) {
  //F = (C x 9/5) + 32
  return (Math.round(((tempCelsius * 9 / 5) + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
