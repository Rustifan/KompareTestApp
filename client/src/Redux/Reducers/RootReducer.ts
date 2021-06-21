import { combineReducers } from "redux";
import errorReducer from "./ErrorReducer";
import usersReducer from "./UsersReducer";

const RootReducer = combineReducers({
    users: usersReducer,
    errors: errorReducer
});

export default RootReducer;