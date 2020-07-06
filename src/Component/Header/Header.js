import React from 'react'
import {connect} from "react-redux";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const Header = (props) => {
    return (
        <div className="app-header d-flex">
            <h1>Список дел</h1>
            <h2>Сделано {props.sumDone} из {props.dataTodosLength}</h2>
        </div>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


function mapStateToProps(state) {
    const {dataTodos, sumDone} = state.main
    return {
        dataTodosLength: dataTodos.length,
        sumDone
    }
}

export default connect(mapStateToProps, null)(Header)