import React from "react"
import '../styles/Container.css'

const Content = (props) =>{
    return(
        <>
            <div id="content" className="content">
                {props.children}
            </div>
        </>
    )
}
export default Content