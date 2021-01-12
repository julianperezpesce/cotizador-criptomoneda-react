import React, { Fragment, useState } from 'react';

const useCriptomoneda = (label, stateInicial, opciones) => {

    //

    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);
    
    const SetCripto = () => (
        <Fragment>             
                <div className="form-group">
                    <label className="h2 text-light"> { label } </label>  

                        <select 
                            className="form-control"
                            onChange={ e => actualizarState(e.target.value)}
                            value={state}>   

                            <option value="">Seleccione</option>

                            {opciones.map(opcion => (
                                <option key={ opcion.CoinInfo.Id } value={ opcion.CoinInfo.Name }> { opcion.CoinInfo.FullName} </option>
                            ))}

                        </select>
                </div>       
        </Fragment>
    );

    //Retornar State, interfaz y func que modifica el state
    return [state, SetCripto, actualizarState];
}

export default useCriptomoneda;