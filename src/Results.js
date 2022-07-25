import React from 'react';
import WordMeaning from './WordMeaning';
import Phonetics from './Phonetics';
import "./Results.css";


export default function Results(props) {
    console.log(props.resultData);
    if (props.resultData) {
        return (
            <div className='Results'>
                <h2>{props.resultData.word}</h2>
                {props.resultData.phonetics.map(function (phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetics phoneticData={phonetic} /></div>

                    )
                })}
                {props.resultData.meanings.map(function (meaning, index) {
                    return (<div key={index}>
                        <WordMeaning data={meaning} />
                    </div>);
                })}


            </div>
        )
    }
    else {
        return null
    }

}