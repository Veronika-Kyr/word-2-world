import React, { useState } from 'react';
import "./Dictionary.css";



export default function Dictionary() {
    let [word, setWord] = useState("");
    function getWord(event) {
        setWord(event.target.value);
    }
    function searchDefinition(event) {
        event.preventDefault();
        alert(`Searching for a ${word}`);
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