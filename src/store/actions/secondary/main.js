import {
    ACTION_NUMBER_0,
    ACTION_NUMBER_1,
    ACTION_NUMBER_2,
    ACTION_NUMBER_3,
    ACTION_NUMBER_4,
    ACTION_NUMBER_5,
    ACTION_NUMBER_6,
    ACTION_NUMBER_7,
    ACTION_NUMBER_8,
    ACTION_NUMBER_9,
} from "../main/actionTypes";


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

export function changeFooterValue(event) {
    return {
        type: 'ACTION_NUMBER_0',
        value: event.target.value,
    }
}


export function pushFooterValue(event) {
    event.preventDefault()
    return (dispatch, getState) => {
        const {footerValue, lastId, dataTodos} = getState().main

        if (footerValue.trim() === '') {
            return
        }

        const newDataTodosPart = {
            value: footerValue,
            id: lastId,
            important: false,
            done: false,
        }

        const newDataTodos = [...dataTodos, newDataTodosPart]

        dispatch(defspec1(newDataTodos))
    }
}


export function defspec1(newDataTodos) {
    return {
        type: 'ACTION_NUMBER_1',
        dataTodos: newDataTodos,
    }
}


export function changeFooterNavbar(event) {
    return {
        type: 'ACTION_NUMBER_2',
        navbarValue: event.target.value,
    }
}

export function onClickNavbarButton(event, mode) {
    event.preventDefault()
    return (dispatch, getState) => {
        const state = getState().main

        if (state.mode === mode) {
            return
        }

        dispatch(defspec5(mode))
    }
}


export function defspec5(mode) {
    return {
        type: 'ACTION_NUMBER_5',
        mode
    }
}


export function onClickItemExclamation(event, id) {
    event.preventDefault()
    return (dispatch, getState) => {
        const {dataTodos} = getState().main

        const newDataTodos = []

        for (const todo of dataTodos) {
            if (todo.id === id) {
                const newTodo = {
                    value: todo.value,
                    id: todo.id,
                    important: !todo.important,
                    done: todo.done,
                }
                newDataTodos.push(newTodo)
            } else {
                newDataTodos.push(todo)
            }
        }

        dispatch(defspec3(newDataTodos))
    }
}


export function defspec3(newDataTodos) {
    return {
        type: 'ACTION_NUMBER_3',
        dataTodos: newDataTodos
    }
}


export function onClickItemTrash(event, id) {
    event.preventDefault()
    return (dispatch, getState) => {

        const {dataTodos, sumDone} = getState().main

        const newDataTodos = []

        let newSumDone = sumDone

        for (const todo of dataTodos) {
            if (todo.id === id) {
                if (todo.done) {
                    newSumDone--
                } else {
                    newSumDone++
                }

                const newTodo = {
                    value: todo.value,
                    id: todo.id,
                    important: todo.important,
                    done: !todo.done,
                }
                newDataTodos.push(newTodo)
            } else {
                newDataTodos.push(todo)
            }
        }

        dispatch(defspec4(newDataTodos, newSumDone))
    }
}


export function defspec4(newDataTodos, newSumDone) {
    return {
        type: 'ACTION_NUMBER_4',
        dataTodos: newDataTodos,
        sumDone: newSumDone,
    }
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

// export function def() {
//     return dispatch => {
//         dispatch(defspec0())
//     }
// }
//
// export function defspec6() {
//     return {
//         type: 'ACTION_NUMBER_6',
//     }
// }
//
// export function defspec7() {
//     return {
//         type: 'ACTION_NUMBER_7',
//     }
// }