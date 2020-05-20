import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import AddFriend from './components/addFriend/addFriend.component';
import SignIn from './components/sign-in/sign-in.component';
import Friends from './components/friends/friends.component';
import PrivateRoute from './utils/PrivateRoute';
import LandingPage from './pages/landing-page/landing-page.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <PrivateRoute path='/friends' component={Friends} /> 
        <PrivateRoute path='/addfriend' component={AddFriend} />         
        <Route path='/signin' component ={SignIn} />   
        <Route path='/' component={LandingPage} />    
      </Switch>
      
    </div>
  );
}

export default App;
