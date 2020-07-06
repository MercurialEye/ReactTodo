import React from 'react'
import Item from "../Item";
import {connect} from "react-redux";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

const List = (props) => {
    const filterItemType1 = (value) => (
        (value).includes(props.navbarValue)
    )

    const filterItemType2 = (important, done) => {
        switch (props.mode) {
            case 'Important':
                return important
            case 'Done':
                return done
            default:
                return true
        }
    }


    const combineFilter = (value, important, done) => {
        return filterItemType1(value) && (filterItemType2(important, done))
    }

    const renderItem = () => {
        return props.dataTodos.map((todo, index) => {
            return (combineFilter(todo.value, todo.important, todo.done)) ? (
                <Item
                    value={todo.value}
                    id={todo.id}
                    done={todo.done}
                    important={todo.important}
                    key={index}
                />
            ) : null;
        })
    }

    return (
        <ul className="todo-list list-group">
            {renderItem()}
        </ul>
    )
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


function mapStateToProps(state) {
    const {dataTodos, navbarValue, mode} = state.main
    return {dataTodos, navbarValue, mode}
}

export default connect(mapStateToProps, null)(List)