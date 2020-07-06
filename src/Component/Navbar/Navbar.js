import React from 'react'
import {connect} from "react-redux";
import {
    changeFooterNavbar, onClickNavbarButton,
} from "../../store/actions/secondary/main";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const Navbar = (props) => {

    const renderButtons = () => {
        return ['All', 'Important', 'Done'].map((label) => {
            const cls = [
                'btn',
                props.mode === label
                    ? 'btn-info'
                    : 'btn-outline-secondary'
            ]

            return (
                <button
                    type="button"
                    className={cls.join(' ')}
                    onClick={event => props.onClickNavbarButton(event, label)}
                >
                    {label}
                </button>
            )
        })
    }

    return (
        <div className="search-panel d-flex">
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск по названию"
                value={props.navbarValue}
                onChange={props.changeFooterNavbar}
            />

            <div className="btn-group">
                {renderButtons()}
            </div>
        </div>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


function mapStateToProps(state) {
    const {navbarValue, mode} = state.main
    return {navbarValue, mode}
}

function mapDispatchToProps(dispatch) {
    return {
        changeFooterNavbar: (event) => dispatch(changeFooterNavbar(event)),
        onClickNavbarButton: (event, mode) => dispatch(onClickNavbarButton(event, mode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)