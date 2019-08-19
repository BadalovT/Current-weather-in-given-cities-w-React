import {combineReducers} from "redux";
import countryReducer from "./countryReducer";
import typeReducer from "./typeReducer";





export default combineReducers({
    countryReducer,
    typeReducer
})