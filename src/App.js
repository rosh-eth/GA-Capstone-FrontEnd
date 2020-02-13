import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import Home from './components/Home/Home';
import SignUpForm from './components/Login/SignUpForm';
import Dashboard from './components/Dashboard/Dashboard';
import LendAndEarn from './components/Dashboard/LendAndEarn/LendAndEarn';
import LoginForm from './components/Login/LoginForm';

import AOS from 'aos';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {calcAssets } from './components/Dashboard/Calculations/Calculations';

const UserContext = React.createContext();
const PortfolioProvider = UserContext.Provider;

const App = () => {

  const [userId, setUser] = useState("5e3dfa6d7028c25d210f4e14");
  const [eth, setEth] = useState(0.00);
  const [dai, setDai] = useState(0.00);
  const [bat, setBat] = useState(0.00);
  const [debt, setDebt] = useState(0.00);
  const [ethPrice, setEthPrice] = useState(0);
  const [batPrice, setBatPrice] = useState(0);
  const [daiPrice, setDaiPrice] = useState(0);
  const [assetBalance, setAssetBalance] = useState(0);
  
  useEffect(() => {
    fetch(`http://localhost:4000/auth/profile/${userId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setEth(data.user.assets.eth);
      setDai(data.user.assets.dai);
      setBat(data.user.assets.bat);
      setDebt(data.user.debt);
    })
  }, [])

  useEffect(() => {
    console.log('updated state');
  }, [eth, dai, bat])

  useEffect(async () => {
    await fetch(`http://localhost:4000/price/eth`)
    .then(response => response.json())
    .then(data => {
      setEthPrice(data.usd_price);
    })

    await fetch(`http://localhost:4000/price/bat`)
    .then(response => response.json())
    .then(data => {
      setBatPrice(data.usd_price);
    })

    await fetch(`http://localhost:4000/price/dai`)
    .then(response => response.json())
    .then(data => {
      setDaiPrice(data.usd_price);
    })
    
  }, [])

  useEffect(() => {
    console.log('assetBalance', assetBalance)
    setAssetBalance(calcAssets(ethPrice, eth, daiPrice, dai, batPrice, bat));
    console.log('assetBalance after', assetBalance)
  })

  AOS.init()
  library.add(fab)
  
  return (
    <div>
      <PortfolioProvider value={{userId, setUser, eth, setEth, dai, setDai, bat, setBat, ethPrice, setEthPrice, batPrice, setBatPrice, daiPrice, setDaiPrice, assetBalance, setAssetBalance, debt, setDebt}}>
      <Switch>
      <Container style={{ background: '#F9FBFD' }} fluid >
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/lendandearn" component={LendAndEarn} />

        </Container>
      </Switch>
      </PortfolioProvider>
    </div>
  );
}

export {UserContext};
export default App;
