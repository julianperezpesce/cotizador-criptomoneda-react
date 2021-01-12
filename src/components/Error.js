import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <h3 className="alert alert-danger">{mensaje}</h3>
     );
}
 
export default Error;
