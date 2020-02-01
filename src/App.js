import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import LoginForm from './components/Forms/LoginForm';
import AOS from 'aos';

import {Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  
  AOS.init()
  
  return (
    <div>
      
      <Switch>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        </Container>
      </Switch>
    </div>
  );
}

export default App;
