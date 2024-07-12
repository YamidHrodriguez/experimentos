import React from "react"

const header = ()=>{
    return(
        <>
            <header style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <div>
                    <div style={{width:'100%', display:'flex',justifyContent:'center'}}>
                        <img style={{width:'100px',height:'100px'}} src="automatizacion.png"></img>
                    </div>
                    <h1>ProcessPulse</h1>
                </div>
                <div><h2>¡Bienvenid@!</h2></div>
            </header>
        </>
    )
}

export default header