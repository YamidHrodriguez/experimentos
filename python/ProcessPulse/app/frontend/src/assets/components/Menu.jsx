import React, { useState } from 'react';
import '../styles/Container.css';
import Shipment from './Shipment';
import Manifiest from './Manifiest';

const Menu = ({ showFormLogin }) => {
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isShipmentVisible, setShipmentVisible] = useState(false);
  const [isManifiestVisible, setManifiestVisible] = useState(false);
  const [isBoolValue, setBoolValue] = useState(false);

  const showShipment = (bool) => {
    if (bool) {
      setMenuVisible(false);
      setManifiestVisible(false);
      setShipmentVisible(true);
    } else {
      setMenuVisible(false);
      setManifiestVisible(false);
      setShipmentVisible(true);
    }
    console.log("Bool: ", bool);
    setBoolValue(bool);
  };

  const showManifiest = () => {
    setMenuVisible(false);
    setShipmentVisible(false);
    setManifiestVisible(true);
  };

  const showMenu2 = () => {
    setMenuVisible(true);
    setShipmentVisible(false);
    setManifiestVisible(false);
  };

  const handleRedirect = (path) => {
    window.open(`http://127.0.0.1:5000/${path}`, '_blank');
  };

  // Agregar console.log para mostrar isBoolValue
  console.log("isBoolValue:", isBoolValue);

  return (
    <>
      {isMenuVisible && (
        <div id="menu" className="menu visible">
          <div className="menu-content">
            <div>
              <input 
                type="button" 
                id="a" 
                name="a" 
                value="🚹 Crear usuario" 
                onClick={() => handleRedirect('user')}
              />
            </div>
            <div>
              <input 
                type="button" 
                id="b" 
                name="b" 
                value="📑 Cambiar origen remesas"
                onClick={() => showShipment(false)}
              />
            </div>
            <div>
              <input 
                type="button" 
                id="c" 
                name="c" 
                value="🗒️ Cambiar destinatario remesas"
                onClick={() => showManifiest()}
              />
            </div>
            <div>
              <input 
                type="button" 
                id="d" 
                name="d" 
                value="✨ Desconsolidar remesa"
                onClick ={() => handleRedirect('shipment/deconsolidation_shipment')}
              />
            </div>
            <div>
              <input 
                type="button" 
                id="e" 
                name="e" 
                value="🔙 Salir" 
                onClick={showFormLogin}
              />
            </div>
          </div>
        </div>
      )}
      {isShipmentVisible && <Shipment showMenu2={showMenu2} value={isBoolValue} />}
      {isManifiestVisible && <Manifiest showMenu2={showMenu2} showShipment={showShipment} />}
    </>
  );
};

export default Menu;
