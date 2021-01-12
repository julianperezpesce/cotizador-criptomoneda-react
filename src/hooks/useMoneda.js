import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);
    
    const Seleccionar = () => (
        <Fragment>             
                <div className="form-group">
                    <label className="h2 text-light"> { label } </label>  

                        <select 
                            className="form-control"
                            onChange={ e => actualizarState(e.target.value)}
                            value={state}>   

                            <option value="">Seleccione</option>

                            {opciones.map(opcion => (
                                <option key={ opcion.codigo } value={ opcion.codigo }> { opcion.nombre} </option>
                            ))}  

                        </select>
                </div>       
        </Fragment>
    );

    //Retornar State, interfaz y func que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;