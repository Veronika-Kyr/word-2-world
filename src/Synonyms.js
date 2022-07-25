import React from 'react';
import "./Synonyms.css";


export default function Synonyms(props) {

    if (props.synonyms) {
        return (
            <div className='Synonyms'>
                <p><strong> Synonyms:</strong></p>
                <ul className='synonymList'>
                    {props.synonyms.map(function (synonym, index) {
                        return <li key={index} className="synonymWord"> {synonym} </li>
                    }
                    )}
                </ul>
            </div>
        )
    } else {
        return null;
    }


}