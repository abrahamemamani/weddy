import React, { useState } from 'react';
import Button from '../button/Button';

const Capture = ({ getResults }) => {

    const [capture, setCapture] = useState({
        city    : '',
        country : ''
    });

    const handleChange = e => {
        setCapture({
            ...capture,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        getResults(capture);
    }

    return (
        <div className="box-wrapper">
            <h3 className="box__title">Weddy</h3>
            <h6 className="box__subtitle">
                Ingrese una ciudad y su país para conocer su clima
            </h6>
            <form onSubmit={ handleSubmit }>
                <div className="form-field__container">
                    <input className="form-field"
                           placeholder="Ingrese la ciudad..."
                           type="text"
                           name="city"
                           onChange={ handleChange }
                           />
                </div>
                <div className="form-field__container">
                    <select className="form-field" name="country" onChange={ handleChange }>
                        <option value="">Seleccione el país...</option>
                        <option value="AR">Argentina</option>
                        <option value="CL">Chile</option>
                        <option value="CO">Colombia</option>
                        <option value="ES">España</option>
                        <option value="US">Estados unidos</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <Button value={ "Consultar clima" } />
            </form>
        </div>
    );
}
 
export default Capture;