import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Weather = ({temperature, cityName}) => {

    const ERROR_MSG = 'Vous n\'avez pas saisie de ville';
    const HOT_LABEL = 'Il fait chaud';
    const COLD_LABEL = 'Il fait froid';

    const [colorClass, setColorClass] = useState('');
    const [sentence, setSentence] = useState('');

    const ambianceSelect = (temp) => {
        console.log(temp);
        if(temp) {
            if (temp >= 15){
                setColorClass('hot');
                setSentence(HOT_LABEL);
            } else {
                setColorClass('cold');
                setSentence(COLD_LABEL);
            }
        }
    };

    useEffect(() => {
        ambianceSelect(temperature);
    }, [temperature])

    return (
        <div className={`container-bg ${colorClass}`}>
            <div className="weather">
                {temperature && 
                    <div className="weather__container">
                        <p className="weather__city">{cityName}</p>
                        <p className="weather__temperature">{temperature}°</p>
                        <p className="weather__infos">{sentence}</p>
                    </div>
                }
                { !temperature &&
                    <p className="error-none">{ERROR_MSG}</p>
                }
            </div>
        </div>
    );
}

Weather.propTypes = {
    cityName: PropTypes.string.isRequired,
    temperature: PropTypes.number,
};

Weather.defaultProps = {
    temperature: null,
}

export default Weather;