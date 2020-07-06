import React from 'react'
import {connect} from "react-redux";
import {changeFooterValue, pushFooterValue} from "../../store/actions/secondary/main";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const Footer = (props) => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                className="form-control new-todo-label"
                placeholder="Введите дело"
                value={props.footerValue}
                onChange={(event) => props.changeFooterValue(event)}
            />

            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={(event) => props.pushFooterValue(event)}
            >
                Add
            </button>
        </form>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


function mapStateToProps(state) {
    const {footerValue} = state.main
    return {footerValue}
}

function mapDispatchToProps(dispatch) {
    return {
        changeFooterValue: (event) => dispatch(changeFooterValue(event)),
        pushFooterValue: (event) => dispatch(pushFooterValue(event)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)