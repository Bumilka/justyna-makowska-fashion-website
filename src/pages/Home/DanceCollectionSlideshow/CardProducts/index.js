import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const CardProduct = ({property}) => {
    const{index, picture, name, price, color,} = property;

    return(
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={name}/>
            <div className="details">
                <p className="item-details">
                    {name + ': '} {color}
                     <br/>
                     {'PRICE: ' + price}
                </p>
            </div>
        </div>
    )
}
export default CardProduct;