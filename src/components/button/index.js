import React from 'react';

const Button = ({ text, onClick, className }) => (
  <div
    className={`${className} pure-button pure-button-primary`}
    onClick={() => onClick()}
  >
    {text}
  </div>
);

export default Button;