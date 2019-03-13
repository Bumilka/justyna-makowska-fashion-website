import React, { Component } from 'react';
import FlyingBirds from './FlyingBirds/index';
import ControlledCarousel from './Carousel/index';


import './style.scss';

class Home extends Component {
  render() {
    return (
        <div>
            <ControlledCarousel/>
            <div className="home-belt"></div>
            <FlyingBirds/>
            <div className="home-belt"></div>

        </div>
    );
  }
}

export default Home;        