import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

import SignIn from './components/sign-in/sign-in.component';
import Friends from './components/friends/friends.component';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <PrivateRoute path='/friends' component={Friends} />        
      <Route path='/signin' component ={SignIn} />
         
        
      </Switch>
      
    </div>
  );
}

export default App;
