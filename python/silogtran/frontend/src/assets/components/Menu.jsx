import React from 'react';
import '../styles/Container.css';

const Menu = () => {

    const handleRedirect = (path) => {
        window.open(`http://127.0.0.1:5000/${path}`, '_blank');
    }; 
  
  return (
    <div id="menu" className="menu visible">
      <div className='menu-content'>
        <div><input type="button" id="a" name="a" value="Crear usuario" onClick={() => handleRedirect('user')}></input></div>
        <div><input type="button" id="b" name="b" value="Cambiar origen remesa"></input></div>
        <div><input type="button" id="c" name="c" value="Cambiar destinatario remesa"></input></div>
        <div><input type="button" id="d" name="d" value="Desconsolidar remesa"></input></div>
        <div><input type="button" id="e" name="e" value="Salir" onClick={() => location.reload()}></input></div>
      </div>
    </div>
  );
};

export default Menu;
