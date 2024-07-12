import React from "react"
import '../styles/Form.css'

const form = (props) =>{
    return(
        <>
            <form id="form-login" name="form-login" className="forms">
                <div id="input-question" className="inputs">
                    <label><h2>¿Ya iniciaste sesión en SILOGTRAN?</h2></label>
                    <div id="btns-login">
                        <input type="button" value="SI"></input>
                        <a href="https://egakat.colombiasoftware.net/index.php?" target="_blank"><input style={{width:'100%'}} type="button" value="NO"></input></a>
                    </div>
                </div>
            </form>
        </>
    )
}
export default form