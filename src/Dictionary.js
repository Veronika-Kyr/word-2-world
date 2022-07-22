import React from 'react';
import "./Dictionary.css";



export default function Dictionary() {


    return (
        <div className='dictionary'>
            <form>
                <input className="wordSearch" type="search" placeholder="A Word You Want" />
                <input className="btnSearch" type="submit" value="Open" />
            </form>
        </div>
    )
}