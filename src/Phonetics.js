import React from 'react';
import "./Phonetics.css";

export default function Phonetics(props) {
    if (props.phoneticData.audio !== '') {
        return (
            <div className='Phonetics'>
                <a className='audio' href={props.phoneticData.audio} target="_blank" rel="noopener noreferrer">🔊</a>
                {props.phoneticData.text}
            </div>
        )
    }
    else {
        return (
            <div className='Phonetics'>
                {props.phoneticData.text}
            </div>
        )
    }
}