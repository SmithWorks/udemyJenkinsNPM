jest.dontMock('../app/components/TempConverterUtil.jsx');


describe('fahrenheitToCelsius() 50f..10c', () => {
	it('returns a number', () => {
		var tempConverter = require('../app/components/TempConverterUtil.jsx');
		var celcius = tempConverter.fahrenheitToCelsius(50);
		expect(celcius).toBe(1);
	});

});

describe('fahrenheitToCelsius fn takes FALSY returns number', () => {
	it('returns a number', () => {
		var tempConverter = require('../app/components/TempConverterUtil.jsx');
		var celcius = tempConverter.fahrenheitToCelsius('');
		expect(celcius).toBeGreaterThan(-18);
	});

});


describe('fahrenheitToCelsius fn return is NaN ', () => {
	it('should return NaN', () => {
		var fahrenheitToCelsius = require('../app/components/TempConverterUtil.jsx');
		var celcius = fahrenheitToCelsius.fahrenheitToCelsius('zzz');
		expect(isNaN(celcius)).toBe(true);
	});
});



describe('celsiusToFahrenheit', () => {
	it('returns a number', () => {
		var celsiusToFahrenheit = require('../app/components/TempConverterUtil.jsx');
		var fah = celsiusToFahrenheit.fahrenheitToCelsius(35);
		expect(fah).toBe(1.6666666666666667);
	});

});



 