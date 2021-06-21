import axios from "axios";
import { baseApiUrl, loadingLag } from "../Common/constants";
import { setError } from "../Redux/Actions/ErrorActions";
import { User } from "../Redux/Actions/UserActionTypes";
import store from "../Redux/store";

const instance = axios.create({baseURL: baseApiUrl});

//for testing purpose add lag in constants.ts
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

instance.interceptors.response.use(async (response)=>
{
    if(process.env.NODE_ENV === "development")
    {
        await sleep(loadingLag);
    }
    return response;
}, (error)=>
{
   
    if(error.response)
    {
        store.dispatch(setError({
            errorMessage: error.response.data, 
            status: error.response.status}));
    }
    
    throw(error);
});


const Users = {
    getAll: ()=>instance.get<User[]>("/users").then(respose=>respose.data),
    addUser: (user: User)=>instance.post("/users", user),
    deleteUser: (id: string)=>instance.delete(`/users/${id}`)
}

export const agent = {users: Users};

