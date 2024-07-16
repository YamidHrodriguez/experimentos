import React from "react";
import '../styles/Form.css';

const FormLogin = ({ showMenu }) => {
  const handleRedirect = () => {
    window.open('http://127.0.0.1:5000/login', '_blank');
  };

  return (
    <>
      <form id="form-login" name="form-login" className="form visible">
        <div id="input-question" className="inputs">
          <div id="text-welcome"><h2>¡Bienvenid@!</h2></div>
          <label>
            <h2>¿Ya iniciaste sesión en <span id="plataform">SILOGTRAN</span>?</h2>
          </label>
          <div id="btns-login">
            <input 
              type="button" 
              value="SI" 
              onClick={showMenu}
            />
            <input 
              style={{ width: '100%' }} 
              type="button" 
              value="NO" 
              onClick={handleRedirect} 
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
