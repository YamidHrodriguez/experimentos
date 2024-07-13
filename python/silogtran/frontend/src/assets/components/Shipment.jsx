import React, { useState } from 'react';
import '../styles/Container.css';
import axios from 'axios';

const Shipment = ({ showMenu2 }) => {
  const [codeShipment, setCodeShipment] = useState('');
  const [numShipments, setNumShipments] = useState('');

  const handleRedirect = (e) => {
    e.preventDefault(); // Detener el envío automático del formulario
    for (let i = 0; i <= (numShipments-1); i++) {
      window.open(`http://127.0.0.1:5000/shipment/0${parseInt(codeShipment) + i}`, '_blank');
    }
    // Puedes agregar más lógica aquí si es necesario
  };

  return (
    <div id="shipment" className='shipment visible'>
      <h2>Remesas</h2>
      <form onSubmit={handleRedirect} id='shipment-content' className='shipment-content'>
        <input type='button' value="Atrás" onClick={showMenu2} />
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
          <label htmlFor="num-shipments">Cantidad de remesas a validar</label>
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
