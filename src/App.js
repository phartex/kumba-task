import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import CustomerProfile from './components/CustomerProfile'
import OrderSummary from './components/OrderSummary'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CustomerProfile}></Route>
        <Route path="/OrderSummary" component={OrderSummary}></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
