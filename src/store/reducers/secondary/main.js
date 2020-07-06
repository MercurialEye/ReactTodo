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
} from "../../actions/main/actionTypes";

const initialState = {
    footerValue: '',
    navbarValue: '',
    sumDone: 0,
    lastId: 0,
    mode:'All',
    dataTodos: [],
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


const handlers = {
    [ACTION_NUMBER_0]: (state, {value}) => ({
        ...state,
        footerValue: value,

    }),
    [ACTION_NUMBER_1]: (state, {dataTodos}) => ({
        ...state,
        footerValue: '',
        lastId: state.lastId + 1,
        dataTodos,
    }),
    [ACTION_NUMBER_2]: (state, {navbarValue}) => ({
        ...state,
        navbarValue,
    }),
    [ACTION_NUMBER_3]: (state, {dataTodos}) => ({
        ...state,
        dataTodos,
    }),
    [ACTION_NUMBER_4]: (state, {dataTodos, sumDone}) => ({
        ...state,
        dataTodos,
        sumDone,
    }),
    [ACTION_NUMBER_5]: (state, {mode}) => ({
        ...state,
        mode
    }),
    [ACTION_NUMBER_6]: (state, action) => ({
        ...state,
    }),
    [ACTION_NUMBER_7]: (state, action) => ({
        ...state,
    }),
    DEFAULT: state => state,
}


const mainReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}


//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


export default mainReducer