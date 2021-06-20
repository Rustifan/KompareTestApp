import React from "react"
import { useSelector } from "react-redux"
import { Header, Item, Segment } from "semantic-ui-react";
import { RootStore } from "../../Redux/store"
import LoadingComponent from "../Loading/LoadingComponent";
import UserItemComponent from "./UserItemComponent";

export default function UserListComponent()
{
    const usersState = useSelector((state: RootStore)=>state.users)
    const {users, loading} = usersState;

    return loading ? 
    <LoadingComponent text="Učitavanje korisnika"/> :
    <Segment style={{width: 400, minHeight: 100, margin:"auto", marginTop: 50}}>
    
    {users.length !== 0 ? 
    <Item.Group divided>
        {users.map(user=>(
            <UserItemComponent key={user._id} user={user}/>
        ))}
    </Item.Group> :

    <Header style={{marginTop: 20}} as="h2" textAlign="center" content="Lista korisnika je prazna"/>
    }
    </Segment>
    
    
}