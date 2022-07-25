import React from 'react';
import "./WordMeaning.css";
import Synonyms from "./Synonyms";

export default function WordMeaning(props) {

    return (
        <div className='WordMeaning'>
            <h3>{props.data.partOfSpeech} :</h3>
            {props.data.definitions.map(function (definition, index) {
                if (definition.example) {
                    return (
                        <div key={index}>
                            <p className='definition'>{definition.definition}</p>
                            <p className='example'><em>For example:</em> <strong> {definition.example}</strong></p>

                        </div>);
                }
                else {
                    return (
                        <div key={index}>
                            <p className='definition'>{definition.definition}</p>
                        </div>);
                }

            })}
            <Synonyms synonyms={props.data.synonyms} />

        </div>
    )
}