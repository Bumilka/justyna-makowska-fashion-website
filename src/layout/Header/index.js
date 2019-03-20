import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo_JM_white.png';
import './style.scss';

class Header extends Component {
  state = {
    isFixed: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hanndelHeaderPosition);
  }

  hanndelHeaderPosition = () => {
    if (window.scrollY > 110 && !this.state.isFixed) {
      this.setState({ isFixed: true });
    } else if (window.scrollY <= this.state.isFixed) {
      this.setState({ isFixed: false });
    }
  };

  render() {
    return (
      <header className={this.state.isFixed ? 'HeaderFixed' : 'Header'}>
       
        <div className="logo">
          <img src={logo} alt="Logo" className="white-logo" />
        </div>
        <nav className="nav-down">
          <ul>
            <li className="first">
              <Link to="/"> HOME </Link>
            </li>
            <li className="first">
              <Link to="/ready-to-wear"> READY TO WEAR </Link>
            </li>
            <li className="first">
              <Link to="/dance-wear"> DANCE WEAR </Link>
            </li>
            <li className="last">
              <Link className="last" to="/atelier"> ATELIER </Link>
            </li>  
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;