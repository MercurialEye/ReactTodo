import {combineReducers} from "redux";
import mainReducer from "../secondary/main";


const rootReducer = combineReducers({
    main: mainReducer
})


export default rootReducer