import React from 'react';
import './Button.scss';

const Button = ({value}) => (
    <input className="btn-curve" 
           type="submit"
           value={ value }/>
);
 
export default Button;