import React from 'react'
import {connect} from "react-redux";
import {onClickItemExclamation, onClickItemTrash} from "../../store/actions/secondary/main";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const Item = (props) => {
    const cls = [
        'todo-list-item',
    ]

    if (props.important) {
        cls.push('important')
    }

    if (props.done) {
        cls.push('done')
    }


    return (
        <li className="list-group-item">
            <span className={cls.join(' ')}>
                <span className="todo-list-item-label"> {props.value}</span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={(event) => props.onClickItemExclamation(event, props.id)}
                >
                    <i className="fa fa-exclamation"/>
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={(event) => props.onClickItemTrash(event, props.id)}
                >
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        </li>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function mapDispatchToProps(dispatch) {
    return {
        onClickItemExclamation: (event, id) => dispatch(onClickItemExclamation(event, id)),
        onClickItemTrash: (event, id) => dispatch(onClickItemTrash(event, id)),
    }
}

export default connect(null, mapDispatchToProps)(Item)