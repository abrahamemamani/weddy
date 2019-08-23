import React from 'react';
import './Output.scss';

const Output = ({ response }) => {
    if(!response.name) return null;
    
    const { name, main, weather } = response,
          degrees = 273.15,
          icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="output box-wrapper">
            <h4 className="box__title">
                <span className="is-icon fas fa-map-marker-alt"></span> { name }
            </h4>
            <div className="output__results">
                <span className="output__results-temp">
                    { parseInt(main.temp - degrees, 10) } &#x2103;
                </span>
                <figure className="output__img-container">
                    <img src={ icon } alt={name}></img>
                </figure>
                <div className="d-flex justify-content-between">
                    <span>Min: { parseInt(main.temp_min - degrees, 10) } &#x2103;</span>
                    <span>Max: { parseInt(main.temp_max - degrees, 10) } &#x2103;</span>
                </div>
            </div>
        </div>
    );
};
 
export default Output;