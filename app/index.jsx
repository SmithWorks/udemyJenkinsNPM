import React from 'react';
import Temperatures from './components/Temperatures.jsx';

main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  React.render(<Temperatures />, app);
 
}
