import React from "react"
import { Header } from "semantic-ui-react"
import UserListComponent from "./UserListComponent"

export default function UsersComponent()
{
    return(
        <>
            <Header textAlign="center" as="h1">Popis Korisnika</Header>
            <UserListComponent/>
        </>
    )
}