import React, { Component } from 'react';
import heartIcon from '../../../layout/Header/HeaderIcons/heart.png';
import logoBlackJM from '../Image/logo_JM.png';
import './style.scss';

class FlyingBirds extends Component {
  render() {
    return (
        <div className="container">
            <img src={heartIcon} className='heartIcon' alt="heartIcon" />
            <img src={logoBlackJM} className='logoBlackJM' alt='logoBlackJM' />
            
            <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
            </div>
            
            <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
            </div>
            
            <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
            </div>
            
            <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
            </div>

            <div className="bird-container--down bird-container--one">
                <div className="bird bird--one"></div>
            </div>
            <div className="bird-container--down bird-container--two">
                <div className="bird bird--two"></div>
            </div>
            <div className="bird-container--down bird-container--three">
                <div className="bird bird--three"></div>
            </div>
            <div className="bird-container--down bird-container--four">
                <div className="bird bird--four"></div>
            </div>
        
        </div>

        
    );
  }
}

export default FlyingBirds;