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
import List from './pages/adminLists/List';
import SignUp from './pages/signUp/SignUp';

function App() {
  return (
    <Router>
      <Navbar  />

      <Switch>
        <Route path='/' exact > <Home /> </Route>
        <Route path='/dashboard' exact > <Dashboard /> </Route>
        <Route path='/login' exact > <Login /> </Route>
        <Route path='/lists' exact ><List  /></Route>
        <Route path='/signUp' exact ><SignUp  /></Route>
      </Switch>
    </Router>
  );
}

export default App;
