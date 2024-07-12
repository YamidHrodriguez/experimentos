import React from "react";
import '../styles/Form.css';

const Form = (props) => {
  const handleRedirect = () => {
    window.open('http://127.0.0.1:5000/login', '_blank');
  };

  return (
    <>
      <form id="form-login" name="form-login" className="forms">
        <div id="input-question" className="inputs">
          <label>
            <h2>¿Ya iniciaste sesión en SILOGTRAN?</h2>
          </label>
          <div id="btns-login">
            <input type="button" value="SI" />
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

export default Form;
