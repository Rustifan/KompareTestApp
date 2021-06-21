import { SetError, SET_ERROR, Error, RemoveError, REMOVE_ERROR } from "./ErrorActionTypes"

export const setError = (error: Error): SetError=>
{
    return {
        type: SET_ERROR,
        payload: error
    }
}

export const removeError = (): RemoveError=>
{
    return{
        type: REMOVE_ERROR
    }
}