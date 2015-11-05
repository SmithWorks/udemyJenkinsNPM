const fahrenheitToCelsius = numberInFarenheit => {
    return (5/9) * (numberInFarenheit-32);
}

const celsiusToFahrenheit = numberInCelsius => {
	return numberInCelsius * (9/5) + 32;
}

module.exports = {
	fahrenheitToCelsius: fahrenheitToCelsius
  , celsiusToFahrenheit: celsiusToFahrenheit
}