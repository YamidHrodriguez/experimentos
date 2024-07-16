import React, { useState } from 'react';
import '../styles/Container.css';
import BackButton from './BackButton';
import axios from 'axios';

const Shipment = ({ showMenu2, value }) => {
  const [codeShipment, setCodeShipment] = useState('');
  const [numShipments, setNumShipments] = useState('');

  const handleRedirect = (e) => {
    e.preventDefault(); // Detener el envío automático del formulario
    console.log(value)
    if (value) {
      window.open('http://127.0.0.1:5000/change_sender_respondent', '_blank');
      for (let i = 0; i <= (numShipments - 1); i++) {
        window.open(`http://127.0.0.1:5000/shipment/0${parseInt(codeShipment) + i}`, '_blank');
  
        if (i === numShipments - 1) {
          // Función para preguntar si desea borrar la cache
          const preguntarCache = () => {
            let borrar_Cache = prompt("¿Deseas borrar cache ahora (SI/NO)?").toUpperCase();
            
            if (borrar_Cache === "SI") {
              window.open('http://127.0.0.1:5000/manifiest/delete_cache_min', '_blank');
              clearInterval(interval); // Detener el interval cuando la respuesta es "SI"
            }
          };
  
          // interval para preguntar cada cierto tiempo (por ejemplo, cada 60 segundos)
          let interval = setInterval(preguntarCache, 60000);
  
          // Llamar a la función una vez inicialmente
          preguntarCache();
        }
      }
    } else {
      for (let i = 0; i <= (numShipments - 1); i++) {
        window.open(`http://127.0.0.1:5000/shipment/0${parseInt(codeShipment) + i}`, '_blank');
      }
    }
  };
  console.log("Valorrrr : ",value)
  return (
    <div id="shipment" className='shipment visible'>
      <h2>Remesas</h2>
      <form onSubmit={handleRedirect} id='shipment-content' className='shipment-content'>
        <BackButton showMenu2={showMenu2} />
        <div>
          <label htmlFor="code-shipment">Código de remesa: </label>
          <input 
            id="code-shipment" 
            name="code-shipment" 
            type="number" 
            value={codeShipment}
            onChange={(e) => setCodeShipment(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num-shipments">Cantidad de remesas: </label>
          <input 
            id="num-shipments" 
            name="num-shipments" 
            type="number" 
            value={numShipments}
            onChange={(e) => setNumShipments(e.target.value)}
          />
        </div>
        <input type="submit" value="OK" />  
      </form>
    </div>
  );
}

export default Shipment;
