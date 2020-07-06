import React from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";
import List from "../List";
import Header from "../Header";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const App = () => {
    return (
        <div className="todo-app">
            <Header/>
            <Navbar/>
            <List/>
            <Footer/>
        </div>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export default App