import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import LoginForm from './components/Login/LoginForm';
import AOS from 'aos';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import {Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import SignUpForm from './components/Login/SignUpForm';
import Dashboard from './components/Dashboard/Dashboard';
import LendAndEarn from './components/Dashboard/LendAndEarn/LendAndEarn';

const App = () => {
  
  AOS.init()
  library.add(fab)
  
  return (
    <div>
      
      <Switch>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/lendandearn" component={LendAndEarn} />

        </Container>
      </Switch>
    </div>
  );
}

export default App;
