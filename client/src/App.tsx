import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { getUsers } from './Redux/Actions/UserActions';
import { RootStore } from './Redux/store';
import { Container } from 'semantic-ui-react';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import { Route, Switch } from 'react-router-dom';
import UsersComponent from './Components/Users/UsersComponent';
import AddUserComponent from './Components/Users/AddUserComponent';

function App() {

  const usersState = useSelector((state: RootStore)=>state.users)
  const dispatch = useDispatch();

  useEffect(()=>
  {   
      if(usersState.users.length === 0)
      {
        dispatch(getUsers());
      }
  }, [dispatch, usersState.users.length])

      

  return (
    <>
      <NavbarComponent/>
      <Container>
        <Switch>
          <Route exact path="/" component={UsersComponent}/>
          <Route exact path="/dodajKorisnika" component={AddUserComponent}/>
        </Switch>
      </Container>
    </>
  )
}
  

export default App;
