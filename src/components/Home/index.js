import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.scss';

const Home = ({callbackValues}) => {

    const [error, setError] = useState('');
    // on contrôle le champs en lecture et en écriture
    const [userInput, setUserInput] = useState('');

    const changeUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleOnSubmit = (event) => {
        // on empêche le rechargement de la page
        event.preventDefault();
        
        let city = userInput;
        //paramètre d'url optionnel utile units=metric
        let url = `${process.env.REACT_APP_API_URL}weather?lang=fr&q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
        
        axios.get(url)
            .then((response) => {
                const tempValue = Math.round(response.data.main.temp);
                const city = response.data.name;
                callbackValues(tempValue, city);
            })
            .catch((error) => {
                setError('la ville demandée n\'existe pas');
            });
    };

    return (
        <div className="container">
		        <form className="form" onSubmit={handleOnSubmit}>
                    {error && <p className="error">{error}</p>}
			        <input
                        type="text"
                        className="form__field"
                        placeholder="Entrez une ville"
                        onChange={changeUserInput} />
			        <button
                        type="submit"
                        className="btn btn--primary btn--inside uppercase"
                    > Valider </button>
		        </form>
        </div>
    )
}

Home.propTypes = {
    callbackValues: PropTypes.func.isRequired,
}

export default Home;