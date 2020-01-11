import managerReducer from "./marks-manager/manager.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    manager: managerReducer
})

export default rootReducer