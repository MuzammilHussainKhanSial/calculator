import React from 'react';
import './Button.css';

const Button = () => {
  const buttons = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className='buttons'>
      {buttons.map((button, index) => (
        <button key={index} className='button'>{button}</button>
      ))}
      
    </div>
  )
}

export default Button
