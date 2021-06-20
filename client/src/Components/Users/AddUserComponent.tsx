import { Form, Formik } from "formik"
import * as Yup from "yup"
import React from "react"
import { Button, Header, Segment } from "semantic-ui-react";
import TextInput from "../Form/TextInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Redux/store";
import { addUser } from "../../Redux/Actions/UserActions";


export default function AddUser()
{
    const dispatch = useDispatch();
    const usersState = useSelector((state: RootStore)=>state.users)


    const validationSchema = Yup.object({
        name: Yup.string().required("Morate unijeti ime"),
        surname: Yup.string().required("Morate unijeti prezime"),
        email: Yup.string()
            .email("Mora biti ispravan email")
            .required("Morate unijeti email")
    })
    const initialValues = 
    {
        name: "",
        surname: "",
        email: ""
    };

    const handleSubmit = (values: typeof initialValues)=>
    {
       dispatch(addUser(values));
    };

    return(
        <>
        <Header 
            style={{padding: 20}}
            as="h1" 
            textAlign="center" 
            content="Dodaj korisnika"/>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({dirty, isValid})=>
            (
                <Segment padded style={{maxWidth: 500, margin: "auto"}}>
                <Form className="ui form">
                    <Header sub>Ime</Header>
                    <TextInput name="name" placeholder="Ime"/>

                    <Header sub>Prezime</Header>
                    <TextInput name="surname" placeholder="Prezime"/>

                    <Header sub>Email</Header>
                    <TextInput name="email" placeholder="Email"/>

                    <Button 
                        loading={usersState.loading}
                        disabled={usersState.loading || !dirty || !isValid}
                        type="submit" 
                        content="Dodaj" 
                        positive/>
                    <Button type="button" content="Poništi" negative as={Link} to="/"/>
                </Form>
                </Segment>
            )}
        </Formik>
        </>
    )
}