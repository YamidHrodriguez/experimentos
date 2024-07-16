import {React,useState} from 'react';
import '../styles/Container.css'
import BackButton from './BackButton';

const ComponentName = ({showMenu2, showShipment}) => {
  const [codeManifiest, setCodeManifiest] = useState('');

  const handleRedirect = (e) => {
    e.preventDefault(); // Detener el envío automático del formulario
     // Llamar a showShipment
    window.open(`http://127.0.0.1:5000/manifiest/0${parseInt(codeManifiest)}#ctl0_MainModule_Remesa`, '_blank');
    showShipment(true)
  };
  
  return (
    <div  id="manifiest" className='manifiest visible'>
        <h2>Manifiesto</h2>
        <form onSubmit={handleRedirect} id='manifiest-content' className='manifiest-content'>
          <BackButton showMenu2={showMenu2}/>
          <div>
            <label htmlFor="code-shipment">Código de manifiesto: </label>
            <input 
              id="code-manifiest" 
              name="code-manifiest" 
              type="number" 
              value={codeManifiest}
              onChange={(e) => setCodeManifiest(e.target.value)}
            />
          </div>
          <input type="submit" value="OK" onClick={()=>{
            handleRedirect
            }}/>  
        </form>
      </div>
  );
};

export default ComponentName;