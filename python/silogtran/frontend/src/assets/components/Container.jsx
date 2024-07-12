import React from "react"
import '../styles/Container.css'
import Header from './Header'
import Form from './Form'
import Content from './Content'

const container = () =>{
    return(
        <>
            <div id="container" className="container">
                <Content>
                    <Header></Header>        
                    <Form></Form>
                </Content>
            </div>
        </>
    )
}
export default container