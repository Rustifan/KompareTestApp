import { Error, ErrorDispatchTypes, REMOVE_ERROR, SET_ERROR } from "../Actions/ErrorActionTypes";

interface DefaultState
{
    error: Error | null;
}

const defaultState: DefaultState = 
{
    error: null
};

const errorReducer = (state: DefaultState = defaultState, action: ErrorDispatchTypes)=>
{
    switch(action.type)
    {
        case SET_ERROR:
            return {error: action.payload};
            
        case REMOVE_ERROR:
            return {error: null};
        
        default:
            return state;
            
    }
}

export default errorReducer;