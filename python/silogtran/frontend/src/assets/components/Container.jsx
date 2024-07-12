import React from "react"
import '../styles/Container.css'

const container = (props) =>{
    return(
        <>
            <div id="container" className="container">
                <div id="content" className="content">
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default container