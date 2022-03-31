import React, {useState} from 'react';
import { Route, useHistory } from 'react-router-dom';

// == Import components
import Weather from '../Weather';
import Home from '../Home';

import './style.scss';

const App = () => {

    const history = useHistory();

    const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState('');

    const callbackValues = (tempValue, city) => {
        setTemperature(tempValue);
        setCity(city);
        // on redirige vers la seconde page /weather
        history.push('/weather');
    };

    return (
        <div className="app">
            <Route exact path="/">
                    <Home callbackValues={callbackValues}/>
            </Route>
            <Route exact path="/weather">
                    <Weather temperature={temperature} cityName={city}/>
            </Route>
        </div>
    )
}

export default App;