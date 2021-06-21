export const SET_ERROR = "SET_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";

export interface Error
{
    errorMessage: string;
    status: number;
}

export interface SetError
{
    type: typeof SET_ERROR;
    payload: Error;
}

export interface RemoveError
{
    type: typeof REMOVE_ERROR;
}

export type ErrorDispatchTypes = SetError | RemoveError;

