import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return ( 
        <div className="mt-5 sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
     );
}
 
export default Spinner;