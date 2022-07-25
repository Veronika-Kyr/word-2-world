import React, { useState } from 'react';
import "./Dictionary.css";
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';



export default function Dictionary() {
    let [word, setWord] = useState("moon");
    let [result, setResult] = useState(null);
    let [misType, setmisType] = useState(' ');
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function getWord(event) {
        setWord(event.target.value);
        setmisType(' ');
    }
    function searchDefinition(event) {
        event.preventDefault();
        search();
    }
    function search() {
        let pexelApiKey = '563492ad6f91700001000001576aa1d81cc14918acbaf48f9fa8f91c';
        let pexelApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
        axios.get(pexelApiUrl, { headers: { "Authorization": `Bearer ${pexelApiKey}` } })
            .then(getPhotos);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(getDefinition)
            .catch(function (error) {
                if (error.response) {
                    setResult(null);
                    setmisType(`Unfortunately we haven't found such a word " ${word} "!`);
                }
            });
    }
    function getDefinition(response) {
        setResult(response.data[0]);
    }
    function getPhotos(response) {
        setPhotos(response.data.photos);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {

        return (
            <div className='dictionary'>
                <form className='search' onSubmit={searchDefinition}>
                    <input className="wordSearch" type="search" placeholder="A Word You Want" onChange={getWord} />
                    <input className="btnSearch" type="submit" value="Open" />
                </form>
                <p className='suggest'>Suggested words: sea, river, table...</p>
                <p className='misType'>{misType}</p>
                <Results resultData={result} />
                <Photos photoData={photos} />
            </div>
        )
    }
    else {
        load();
        return "Loading";
    }
}