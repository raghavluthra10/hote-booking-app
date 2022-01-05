import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss';


const Navbar: React.FC<{}> = () => {
    return (
        <div className="navContainer">
            <div className="navbarBackground  " >

                <div className="navPages">
                    <Link className="subNavPages" to='/'>Home</Link>
                    <Link  className="subNavPages" to='/dashboard'>Dashboard</Link>
                    
                </div>

                <div className="navLogin">
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
