import React from 'react';
import '../styles/Container.css'
const BackButton = ({showMenu2}) => {
  return (
    <div id="btn-back">
        <input type='button' value="Atrás" className="btn-back" onClick={showMenu2} />
    </div>
  );
};

export default BackButton;