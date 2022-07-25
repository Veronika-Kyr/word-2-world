import React from 'react';
import WordMeaning from './WordMeaning';
import "./Results.css";


export default function Results(props) {
    console.log(props.resultData);
    if (props.resultData) {
        return (
            <div className='Results'>
                <h2>{props.resultData.word}</h2>

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