import React from 'react';
import './App.scss';
import {  BrowserRouter as Router, 
  Route, 
  Switch 
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Navbar  />

      <Switch>
        <Route path='/' exact > <Home /> </Route>
        <Route path='/dashboard' exact > <Dashboard /> </Route>
        <Route path='/login' exact > <Login /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
