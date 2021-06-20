import { Dispatch } from "redux";
import { agent } from "../../API/agent";
import { User, UsersDispatchType, USERS_ADD, USERS_FAIL, USERS_LOADING, USERS_SUCESS, USER_DELETE, USER_DELETING } from "./UserActionTypes";
import { history } from "../..";
import { ObjectID } from 'bson';

export const getUsers = () => async (dispatch: Dispatch<UsersDispatchType>) => {
    try {
        dispatch({
            type: USERS_LOADING
        });
        const res = await agent.users.getAll();

        dispatch({
            type: USERS_SUCESS,
            payload: res
        })


    }
    catch (error) {
        console.log(error);
        dispatch({
            type: USERS_FAIL
        })
    }
}

export const addUser = (values: { name: string, surname: string, email: string }) =>
    async (dispatch: Dispatch<UsersDispatchType>) => {
        try {
            dispatch({ type: USERS_LOADING });

            const id = new ObjectID().toHexString();
            const user: User = { ...values, _id: id };

            await agent.users.addUser(user);

            dispatch({ type: USERS_ADD, payload: user });
            history.push("/");
        }
        catch (error) {
            console.log(error);
            dispatch({
                type: USERS_FAIL
            })
        }

    }

export const deleteUser = (id: string)=> 
    async (dispatch: Dispatch<UsersDispatchType>)=>
{
    try{
        dispatch({type: USER_DELETING, payload: id});

        await agent.users.deleteUser(id);

        dispatch({type: USER_DELETE, payload: id});

    }
    catch(error)
    {
        console.log(error);
        dispatch({type: USERS_FAIL})
    }
}