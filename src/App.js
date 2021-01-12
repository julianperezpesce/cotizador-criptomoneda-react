import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import imagen from './assets/img/cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';



function App() {

  const [ moneda, guardarMoneda ] = useState('');
  const [ cripto, guardarCriptomoneda ] = useState('');
  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState(false);

  useEffect( () => {
    
    const cotizarCriptomoneda = async () => {
        //evitamos la ejecución la primera vez
        if(moneda === '') return;

        //consultar la api para obtener la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

        const resultado = await axios.get(url);

        //Mostrar el Spinner
        guardarCargando(true);

        //Ocultar el Spinner
        setTimeout( () => {

          //Cambiar el estado
          guardarCargando(false);

          //Guardar Cotizacion
          guardarResultado(resultado.data.DISPLAY[cripto][moneda]);

        }, 1000)

        
    }

    cotizarCriptomoneda();

  }, [moneda, cripto])

  //Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado}/>

  return (
    <div className="Contenedor">
      <div className="row">
        <div className="col-6">
          
          <img className="Imagen" src={imagen} alt="cripto monedas"></img>
        
        </div>

        <div className="col-6">
          <h1 className="Heading">Cotizador de Monedas</h1>
          <Formulario 
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />

          {componente}
          
        </div>
      </div>

    </div>
  );
}

export default App;
