import React from 'react';

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    return (
        <div className="container">
            <p className="mt-5 alert alert-primary">El precio es: <span> {resultado.PRICE} </span></p>
            <p className="alert alert-primary">Variación: <span> {resultado.CHANGEPCTDAY} </span></p>
            <p className="alert alert-primary">Variación: <span> {resultado.LASTUPDATE} </span></p>
        </div>

     );
}
 
export default Cotizacion;