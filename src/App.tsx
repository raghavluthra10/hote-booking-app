import React, { useEffect } from 'react';
import './App.scss';
import {  BrowserRouter as Router, 
  Route, 
  RouteComponentProps, 
  Switch 
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import List from './pages/adminLists/List';
import SignUp from './pages/signUp/SignUp';
import logging from './config/logging';
import routes from './config/routes';
import PrivateRoute from './config/PrivateRoute';
import Demo from './pages/demo/demo';
import ListFullPage from './pages/listFullPage/ListFullPage'

function App() {

  useEffect(() => {
    logging.info('Loading application.')
  }, []);

  const isAuthenticated = false;

  return (
    <Router>
      <Navbar  />

      <Switch>
        <Route path='/' exact > <Home /> </Route>
        {/* <Route path='/dashboard' exact > <Dashboard /> </Route> */}
        <Route path='/login' exact > <Login /> </Route>
        <Route path='/lists' exact ><List  /></Route>
        <Route path='/signUp' exact ><SignUp  /></Route> 
        <Route path='/demo' exact ><Demo  /></Route> 
        <Route path='/page-detail' exact ><ListFullPage  /></Route> 


        <PrivateRoute  
          path="/dashboard"
          isAuthenticated={isAuthenticated}
          component={Dashboard} 
        />


      </Switch>
    </Router>
  );
}

export default App;


//  {routes.map((route, index) => {
//   return <Route
//       key={index}
//       path={route.path}
//       exact={route.exact}
//       render={(props: RouteComponentProps<any>) => (
//         <route.component
//         name={route.name}
//         {...props}
//         {...route.props}
//         />
//       )}
//       />
//  })} 