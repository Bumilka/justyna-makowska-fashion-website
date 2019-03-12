import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.scss';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './layout/Header/index';
import Footer from './layout/Footer/index';

import Home from './pages/Home/index';
import ReadyToWear from './pages/ReadyToWear/index';
import DanceWear from './pages/DanceWear/index';
import Atelier from './pages/Atelier/index';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Header/>
    <Route exact path='/' component={Home} />
    <Route path='/ready-to-wear' component={ReadyToWear} />
    <Route path='/dence-wear' component={DanceWear} />
    <Route path='/atelier' component={Atelier} />
    <Footer/>
    </div>
    </BrowserRouter>,
    document.getElementById('root')
   );