import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo_JM_white.png';
import './style.scss';

/*
<nav className="nav-top">
<Link to="/ready-to-wear"> Language PL / ANG </Link>
<Link to="/">Shiping</Link>
<Link to="/dance-wear">Login  </Link>
<Link to="/atelier"> Add </Link>
</nav>
*/

class Header extends Component {
  render() {
    return (
         <header className="container-nav">
        
           
            
                <img src={logo} alt="Logo" className="white-logo"/>
            <nav className="nav-down">
                <Link className="first" to="/"> HOME </Link>
                <Link to="/ready-to-wear"> READY TO WEAR </Link>
                <Link to="/dance-wear"> DANCE WEAR </Link>
                <Link className="last" to="/atelier"> ATELIER </Link>
            </nav>

        </header>
    );
  }
}

export default Header;