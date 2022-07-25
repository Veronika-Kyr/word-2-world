import React, { useState } from 'react';
import "./Dictionary.css";
import axios from 'axios';
import Results from './Results';



export default function Dictionary() {
    let [word, setWord] = useState("");
    let [result, setResult] = useState(null);
    let [misType, setmisType] = useState(' ');

    function getWord(event) {
        setWord(event.target.value);
    }
    function searchDefinition(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(getDefinition)
            .catch(function (error) {
                if (error.response) {
                    setResult(null);
                    setmisType(`Unfortunately we haven't found such a word " ${word} "!`);
                    // alert(`Unfortunately we haven't found such a word ${word}`);
                }
            });
    }
    function getDefinition(response) {
        setResult(response.data[0]);
    }

    return (
        <div className='dictionary'>
            <form className='search' onSubmit={searchDefinition}>
                <input className="wordSearch" type="search" placeholder="A Word You Want" onChange={getWord} />
                <input className="btnSearch" type="submit" value="Open" />
            </form>
            <p className='misType'>{misType}</p>
            <Results resultData={result} />
        </div>
    )
}