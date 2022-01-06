import { Button } from '@material-ui/core';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './navbar.scss';
import {
    createTheme,
    createStyles,
    withStyles,
    makeStyles,
    Theme,
    ThemeProvider,
  } from '@material-ui/core/styles';


const Navbar: React.FC<{}> = () => {

    const histor = useHistory();

    const redirectToLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        histor.push('/login');
        console.log('redirect')
    };

    return (
        <div className="navContainer">
            <div className="navbarBackground  " >
                <div className="navLogo">
                    <Link to='/'>Logo</Link>
                </div>

                <div className="navPages">
                    <Link className="subNavPages" to='/'>Home</Link>
                    <Link  className="subNavPages" to='/dashboard'>Dashboard</Link>
                    <Link className="subNavPages" to='/lists'>Lists</Link>
                </div>

                <Button variant="contained" className="navLogin" onClick={redirectToLogin} >
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Navbar
