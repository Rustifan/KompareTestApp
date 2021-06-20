import { User, UsersDispatchType, USERS_ADD, USERS_FAIL, USERS_LOADING, USERS_SUCESS, USER_DELETE, USER_DELETING } from "../Actions/UserActionTypes";

interface DefaultState
{
    loading: boolean;
    deletingUser: string | null;
    users: User[];

};

const defaultState: DefaultState = 
{
    loading: false,
    deletingUser: null,
    users: []

}


const usersReducer = (state: DefaultState = defaultState, action: UsersDispatchType): DefaultState=>
{
    switch(action.type)
    {
        case USERS_LOADING:
            return {...state, loading: true};
            
        case USERS_FAIL:
            return {...state, loading: false};
            
        case USERS_SUCESS:
            return {...state, loading: false, users: action.payload};
        
        case USERS_ADD:
            return {...state, loading: false, users: [...state.users, action.payload]};
        
        case USER_DELETING:
            return {...state, deletingUser: action.payload};
        
        case USER_DELETE:
            return {...state, deletingUser: null, users: state.users.filter(x=>x._id!==action.payload)};
        
        default:
            return state;
    }
    
}

export default usersReducer;