const convertToCelsius = function(fah) {
  const celsius = Math.round((fah - 32)*5/9*10)/10
  return celsius
};

const convertToFahrenheit = function(celsius) {
  const fah = Math.round((celsius*9/5+32)*10)/10
  return fah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
