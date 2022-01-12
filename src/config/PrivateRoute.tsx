import React, { FC } from 'react'
import { ROLES } from './roles';
import { useSelector } from 'react-redux';

import {
    Route,
    Redirect,
    BrowserRouter
} from 'react-router-dom';


const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
}

export default PrivateRoute;
  

// understand how to make private routes
// understand how to make role based authorization
// add toaster for alert
// make list page
// make dashboard
// how to decide what to put in redux?
// make a seperate button component using material ui button that is reusable
// how local database vs remote database work
