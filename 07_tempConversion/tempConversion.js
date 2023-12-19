const convertToCelsius = function(tempFahrenheit) {
  temperatureInCelsius = (tempFahrenheit - 32) * (5/9)
  roundedTempInCelsius = Math.round(temperatureInCelsius * 10)/10
  return roundedTempInCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  temperatureInFahrenheit = (tempCelsius * (9/5) + 32)
  roundedTempInFahrenheit = Math.round(temperatureInFahrenheit * 10)/10
  return roundedTempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
