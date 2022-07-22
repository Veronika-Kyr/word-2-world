import React, { useState } from 'react';
import "./Dictionary.css";
import axios from 'axios';



export default function Dictionary() {
    let [word, setWord] = useState("");
    function getWord(event) {
        setWord(event.target.value);
    }
    function searchDefinition(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(getDefinition);
    }
    function getDefinition(response) {
        console.log(response);
    }

    return (
        <div className='dictionary'>
            <form className='search' onSubmit={searchDefinition}>
                <input className="wordSearch" type="search" placeholder="A Word You Want" onChange={getWord} />
                <input className="btnSearch" type="submit" value="Open" />
            </form>
        </div>
    )
}