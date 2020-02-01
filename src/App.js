import React from 'react';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import AOS from 'aos';

import {Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';

{/* <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/> */}

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
