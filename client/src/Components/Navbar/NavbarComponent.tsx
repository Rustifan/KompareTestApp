import React from "react"
import { Link } from "react-router-dom"
import { Container, Icon, Menu } from "semantic-ui-react"


export default function NavbarComponent() {



    const style =
    {
        fontSize: 20
    }

    return (
        <>

            <Menu inverted className="navbar">
                <Container>
                    
                    <Menu.Item>
                        <Icon name="user" />
                        <Link style={style} to="/">Korisnici</Link>
                    </Menu.Item>
                    
                    <Menu.Item>
                        <Link style={style} to="/dodajKorisnika">Dodaj korisnika</Link>
                    </Menu.Item>
                    
                    </Container>
            </Menu>

        </>
    )
}