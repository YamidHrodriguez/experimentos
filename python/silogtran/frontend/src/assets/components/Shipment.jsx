import React, { useState } from 'react';
import '../styles/Container.css';
import axios from 'axios';

const Shipment = ({ showMenu2 }) => {

  return (
    <div id="shipment" className='shipment visible'>
      <h2>Cambiar origen de remesas</h2>
      <form action='http://127.0.0.1:5000/shipment' method='get' id='shipment-content' className='shipment-content'>
        <div>
          <label htmlFor="code-shipment">Código de remesa: </label>
          <input 
            id="code-shipment" 
            name="code-shipment" 
            type="number" 
          />
        </div>
        <div>
          <label htmlFor="num-shipments">Cantidad de remesas a validar</label>
          <input 
            id="num-shipments" 
            name="num-shipments" 
            type="number" 
          />
        </div>
        <input type="submit" value="OK" />  
      </form>
    </div>
  );
}

export default Shipment;
