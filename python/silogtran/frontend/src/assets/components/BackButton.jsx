import React from 'react';
import '../styles/Container.css'
const BackButton = ({showMenu2}) => {
  return (
    <div>
        <input type='button' value="Atrás" id="btn-back" className="btn-back" onClick={showMenu2} />
    </div>
  );
};

export default BackButton;