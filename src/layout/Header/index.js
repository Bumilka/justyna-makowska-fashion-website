import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './HeaderIcons/logo_JM_white.png';
import heartIcon from './HeaderIcons/heart.png';
import shopBagIcon from './HeaderIcons/ShopsBag.png';
import searchIcon from './HeaderIcons/search.png';
import newsletterIcon from './HeaderIcons/newsletter.png';
import worldIcon from './HeaderIcons/world.png';
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

        <div className='boxWrapper'>
          <div className='headerIconsRow'>

            <nav className="iconHeaderWrapperLeft">
              <ul>
                <li className="newsletterIcon">
                  <a href="#">
                    <img src={newsletterIcon} className='icon' />
                    <span className="textIcon">NEWSLETER</span>
                  </a>
                </li>
                <li className="changeCountryIcon">
                  <a href="#">
                    <div class="shippingCountry PL">
                      <img src={worldIcon} className='icon' />
                      <span className="textIcon">LANGUAGE:</span>
                      <span className="textIcon">/ PL</span>
                    </div>
                  </a>
                </li>
                <li classname="aboutUsIcon">
                  <a href="#">
                    <img src={worldIcon} className='icon' />
                    <span class="textIcon">+48 784-991-893</span>
                  </a>
                </li>
              </ul>
            </nav>

            <nav classname='iconHeaderWrapperRight'>
              <ul>
              <li classname='heartIcon'>
                  <a href='#'>
                    <span className="textIcon">LOGIN</span>
                  </a>
                </li>
                <li classname='heartIcon'>
                  <a href='#'>
                    <img src={heartIcon} alt='heartIconNav' className='icon' />            
                  </a>
                </li>
                <li classname='shopBagIcon'>
                  <a href='#'>
                    <img src={shopBagIcon} alt='shopBagIcon' className='icon'/>
                  </a>
                </li>
                <li classname='searchIcon'>
                  <a href='#'>
                    <img src={searchIcon} alt='searchIcon' className='icon'/>      
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='logoHeader'>
            <img src={logo} alt="Logo" className="logoRow" />
          </div>
        </div>


        <nav className="nav-main">
          <ul>
            <li>
              <Link to="/"> HOME </Link>
            </li>
            <li>
              <Link to="/ready-to-wear"> READY TO WEAR </Link>
            </li>
            <li>
              <Link to="/dance-wear"> DANCE WEAR </Link>
            </li>
            <li >
              <Link to="/atelier"> ATELIER </Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;