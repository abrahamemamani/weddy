import React, { useState, useEffect } from 'react';
import Output from './components/output/Output';
import Capture from './components/capture/Capture';
import Error from './components/error/Error';
import './components/box/Box.scss';
import './components/field/Field.scss';
import axios from 'axios';

const App = () => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [response, setResponse] = useState({});

  useEffect(() => {
    if(city === '' || country === '') return;

    const sendRequest = () => {
      const appid = '3b0643c85434fe8bb9bfdad6a8259d5f',
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appid}`;
      axios.get(url)
        .then(response => {
          setResponse(response.data);
        })
        .catch(error => {
          if(error.response.data.cod === "404"){
            setError(true);
            setErrorMsg('Oops! Puede que la ciudad no exista')
          }
        });
    }
    sendRequest();
  }, [city, country]);

  const getResults = data => {
    if(data.city === '' || data.country === ''){
      setError(true);
      setErrorMsg('Ambos campos son obligatorios');
      return;
    }
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  return (
    <div className="app-wrapper vh-100 d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-5">
            <div className="d-flex justify-content-center mb-5">
              <Capture getResults={ getResults } />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="d-flex justify-content-center">
              {
                (error) ? (
                  <Error msg={ errorMsg } />
                ) : ( 
                  <Output response={ response } />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default App;