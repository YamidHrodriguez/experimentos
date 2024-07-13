import React, { useState } from 'react';
import '../styles/Container.css';
import Shipment from './Shipment';

const Menu = ({ showFormLogin }) => {
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isShipmentVisible, setShipmentVisible] = useState(false);

  const showShipment = () => {
    setMenuVisible(false);
    setShipmentVisible(true);
  };

  const showMenu2 = () => {
    setMenuVisible(true);
    setShipmentVisible(false);
  };

  const handleRedirect = (path) => {
    window.open(`http://127.0.0.1:5000/${path}`, '_blank');
  };

  return (
    <>
      {isMenuVisible && (
        <div id="menu" className="menu visible">
          <div className='menu-content'>
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
                onClick={showShipment}
              />
            </div>
            <div>
              <input 
                type="button" 
                id="c" 
                name="c" 
                value="🗒️ Cambiar destinatario remesas"
              />
            </div>
            <div>
              <input 
                type="button" 
                id="d" 
                name="d" 
                value="✨ Desconsolidar remesa"
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
      
      {isShipmentVisible && <Shipment showMenu2={showMenu2} />}
    </>
  );
};

export default Menu;
