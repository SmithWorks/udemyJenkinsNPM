"use strict";

jest.dontMock('../app/components/TempConverterUtil.jsx');

const TempConverterUtil = require('../app/components/TempConverterUtil.jsx');

describe('when calling fahrenheitToCelsius(..)', function() {	

	it('should take fah:50 and return celcius:10', () => {
		let celcius = TempConverterUtil.fahrenheitToCelsius(50);
		expect(celcius).toEqual(10);
	});

	it('should take FALSY and return a -18', () => {
		let celcius = TempConverterUtil.fahrenheitToCelsius('');
		expect(celcius).toBeGreaterThan(-18);
	});

	it('should return NaN if input is not a number', () => {
		let celcius = TempConverterUtil.fahrenheitToCelsius('zzz');
		expect(isNaN(celcius)).toBe(true);
	});
});


describe('when calling celsiusToFahrenheit(..)', () => {
	
	it('should take celcius:35 and output fah:95', () => {
		let fah = TempConverterUtil.celsiusToFahrenheit(35);
		console.log(`fah is ${fah}`);
		expect(fah).toBe(95);
	});

	it('should take FALSY and return a -18', () => {
		let fah = TempConverterUtil.celsiusToFahrenheit('');
		console.log(`fah is ${fah}`);
		expect(fah).toBeGreaterThan(-18);
	});

	it('should return NaN if input is not a number', () => {
		let fah = TempConverterUtil.celsiusToFahrenheit('zzz');
		console.log(`fah is ${fah}`);
		expect(isNaN(fah)).toBe(true);
	});

});



 