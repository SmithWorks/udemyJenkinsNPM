import React from 'react';
import TempConverterUtil from "./TempConverterUtil.jsx";

const NAN_MSG = "Numbers only";
export default class Temperatures extends React.Component {
   constructor(props){
   	super(props);
   	this.state = {inputFahrenheitValue: '', 
   				        inputCelciusValue: '' };
   }

  render() {
    return ( 
    	<div id="myConverterDiv">

        <span>Fahrenheit:</span>
        <input id="fahID" type="text" 
        	   value={this.state.inputFahrenheitValue}
        	   onChange= {this.handleFahInputChange.bind(this) }
        	   onBlur={this.handleFahLostFocus.bind(this)}
        	   onClick={ () => this.handleReset()}
             onKeyPress={ this.handleFahKeyPress.bind(this) }
        	   size="12" maxLength="3"
             data-toggle="tooltip" title="Enter fahrenheit value"/>

        <span>&nbsp;</span>
        <span>Celcius:</span>
        <input id="celciusID"  type="text" 
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

    if (event.target.value.trim() == ''){
      this.handleReset(event);
    } 
    else if ( isNaN(event.target.value) ){
      this.setState({inputFahrenheitValue: NAN_MSG}); 
      setTimeout(() => {
        this.handleReset(event) 
      }, 750); 
    }
    else {
       var computedCelcius = TempConverterUtil.fahrenheitToCelsius(event.target.value);
       this.setState({inputCelciusValue: computedCelcius});
    }
  }

handleCelciusInputChange(event){
  //this method makes it so the element can update its own value
    this.setState({inputCelciusValue: event.target.value});
    if (event.target.value.trim() == '') {
      this.handleReset(event);
    } 
    else if ( isNaN(event.target.value) ){
      this.setState({inputCelciusValue: NAN_MSG}); 
      setTimeout(() => {
        this.handleReset(event) 
      }, 750);  
    }
    else {
       var computedFah = TempConverterUtil.fahrenheitToCelsius(event.target.value);
       this.setState({inputFahrenheitValue: computedFah});
    }
  }  


handleFahKeyPress(event){
    if(event.charCode == 13){
            this.handleFahLostFocus(event);
        }
  }

handleReset(event){
 	this.setState({inputFahrenheitValue: '', 
   				  inputCelciusValue: '' });
 }

}
