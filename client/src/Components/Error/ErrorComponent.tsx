import React from "react";
import { useDispatch } from "react-redux";
import { Header, Message } from "semantic-ui-react";
import { removeError } from "../../Redux/Actions/ErrorActions";
import { Error } from "../../Redux/Actions/ErrorActionTypes";

interface Props
{
    error: Error;
}

export default function ErrorComponent({error}: Props)
{
    const dispatch = useDispatch();
    const handleDismiss = ()=>
    {
        dispatch(removeError());
    }

    return(
        <Message 
            onDismiss={handleDismiss} 
            style={{width: 700, margin: "auto", marginTop: 50, marginBottom:50}} 
            error>
            <Header 
                textAlign="center">
                    Dogodila se pogreška. Status: {error.status}</Header>
            <div 
                className="errorMessage" 
                style={{textAlign: "center", marginTop: 10}}>
                    {error.errorMessage}</div>
        </Message>
    )
}

