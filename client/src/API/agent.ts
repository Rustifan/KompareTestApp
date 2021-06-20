import axios from "axios";
import { loadingLag } from "../Common/constants";
import { User } from "../Redux/Actions/UserActionTypes";

const instance = axios.create({baseURL: "http://localhost:8000/api"});

//for testing purpose add loading lag
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

instance.interceptors.response.use(async (response)=>
{
    await sleep(loadingLag);
    return response;
});

const Users = {
    getAll: ()=>instance.get<User[]>("/users").then(respose=>respose.data),
    addUser: (user: User)=>instance.post("/users", user),
    deleteUser: (id: string)=>instance.delete(`/users/${id}`)
}

export const agent = {users: Users};

