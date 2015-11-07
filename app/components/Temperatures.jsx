import React from 'react';
import TempConverterUtil from "./TempConverterUtil.jsx"; 

export default class Temperatures extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {inputFahrenheitValue: '', 
   				  inputCelciusValue: '' };
   }

  render() {
    return ( 
    	<div id="myConverterDiv">

        <span>&nbsp;</span>

        <span>Fahrenheit:</span>
        <input type="text" 
        	   value={this.state.inputFahrenheitValue}
        	   onChange= {this.handleFahInputChange.bind(this) }
        	   onBlur={this.handleFahLostFocus.bind(this)}
        	   onClick={ () => this.handleReset()}
        	   size="12" maxLength="3"/>

        <span>&nbsp;</span>
        <span>Celcius:</span>
        <input type="text" 
        	   value={this.state.inputCelciusValue}
        	   onChange= {this.handleCelciusInputChange.bind(this) }
        	   onBlur={this.handleCelciusLostFocus.bind(this)}
        	   onClick={ () => this.handleReset()}
        	   size="12" maxLength="3"/>

        </div> 
    	);
  }

  handleFahInputChange(event){
  	//this method makes it so the element can update its own value
  	this.setState({inputFahrenheitValue: event.target.value});
  }

  handleFahLostFocus(event){
  	var computedCelcius = TempConverterUtil.fahrenheitToCelsius(event.target.value);
  	this.setState({inputCelciusValue: computedCelcius});
  }

handleCelciusInputChange(event){
	//this method makes it so the element can update its own value
  	this.setState({inputCelciusValue: event.target.value});
  }  
handleCelciusLostFocus(event){
  	var computedFah = TempConverterUtil.celsiusToFahrenheit(event.target.value);
  	this.setState({inputFahrenheitValue: computedFah});
  }

 handleReset(event){
 	this.setState({inputFahrenheitValue: '', 
   				  inputCelciusValue: '' });

 }

}
