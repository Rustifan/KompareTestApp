export const USERS_LOADING = "USERS_LOADING";
export const USERS_FAIL = "USERS_FAIL";
export const USERS_SUCESS = "USERS_SUCESS";
export const USERS_ADD = "USERS_ADD";
export const USER_DELETE = "USER_DELETE";
export const USER_DELETING = "USER_DELETING";

export interface User
{
    _id: string;
    name: string;
    surname: string;
    email: string;
}

export interface UsersLoading
{
    type: typeof USERS_LOADING;
}

export interface UsersFail
{
    type: typeof USERS_FAIL;
}

export interface UsersSucess
{
    type: typeof USERS_SUCESS;
    payload: User[];
}

export interface UsersAdd
{
    type: typeof USERS_ADD;
    payload: User;
}

export interface UserDelete
{
    type: typeof USER_DELETE;
    payload: string;
}

export interface UserDeleting
{
    type: typeof USER_DELETING;
    payload: string;
}

export type UsersDispatchType = 
    UsersLoading | UsersSucess | UsersFail | UsersAdd |UserDeleting | UserDelete;

