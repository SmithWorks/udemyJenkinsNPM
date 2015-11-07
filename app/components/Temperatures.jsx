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
        	   //onBlur={this.handleCelciusLostFocus.bind(this)}
        	   //onClick={ () => this.handleReset()}
        	   size="12" maxLength="3"/>

        </div> 
    	);
  }

handleFahInputChange(event){
    //this method makes it so the element can update its own value
    this.setState({inputFahrenheitValue: event.target.value});
  }

handleCelciusInputChange(event){
  //this method makes it so the element can update its own value
    this.setState({inputCelciusValue: event.target.value});
  }  


handleFahKeyPress(event){
    if(event.charCode == 13){
            this.handleFahLostFocus(event);
        }
  }

handleFahLostFocus(event){
    const NAN_MSG = "Numbers only";
    
    if (event.target.value == ''){
      //don't do anything, just proceed to celcius
      //this.setState({inputFahrenheitValue: NAN_MSG});  
      //event.target.focus();
    } 
    else if ( isNaN(event.target.value) 
          && NAN_MSG === event.target.value){
              this.handleReset(event) 
    }
    else if ( isNaN(event.target.value) ){
      this.setState({inputFahrenheitValue: NAN_MSG});  
      event.target.focus(); 
    }
    else {
  	   var computedCelcius = TempConverterUtil.fahrenheitToCelsius(event.target.value);
  	   this.setState({inputCelciusValue: computedCelcius});
    }
  }

handleReset(event){
 	this.setState({inputFahrenheitValue: '', 
   				  inputCelciusValue: '' });
 }

}
