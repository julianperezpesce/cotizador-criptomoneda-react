import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {

    // State del listado de Criptomonedas
    const [ listacripto, guardarCripto ] = useState([]);
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dólar USA' },
        { codigo: 'ARS', nombre: 'Peso Argentino' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' }
    ];

    //Utilizar useMoneda
    const [ moneda, SelectMonedas ] = useMoneda('Elija su moneda', '', MONEDAS);

    //Utilizar useCriptomoneda
    const [ criptomoneda, SetCripto] = useCriptomoneda('Elija su criptomoneda', '', listacripto);

    //Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            guardarCripto(resultado.data.Data);
        }

        consultarAPI();

    }, []); //[] Para que se ejecute una sola vez

    //Cuando hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        //Validar si ambos campos estan llenos
        if (moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }

        //Pasar los datos componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }
    
    
    return ( 
        
            <form
                onSubmit={cotizarMoneda}
            >
                {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}

                <div className="section">
                    <SelectMonedas />
                </div>

                <div className="section">
                    <SetCripto />
                </div>

                <br></br>
                
                <div className="section">
                    <button className="btn btn-primary"
                        type="submit"
                        value="Calcular"
                    >Calcular</button>
                </div>           
            
            </form>
        
        
     );
}
 
export default Formulario;
