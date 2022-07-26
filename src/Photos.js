import React from 'react';
import "./Photos.css";

export default function Photos(props) {
    if (props.photoData) {
        return (
            <div className='Photo'>
                <div className='menSect'>
                    <div className='row'>
                        {props.photoData.map(function (photo, index) {
                            return (
                                <div className='col-sm-4' key={index}>
                                    <a className='photoExplain' href={photo.src.original} target="_blank" rel="noopener noreferrer">
                                        <img className='img-fluid' src={photo.src.landscape} alt="explaining to this word" />
                                    </a>
                                </div>)
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }

}