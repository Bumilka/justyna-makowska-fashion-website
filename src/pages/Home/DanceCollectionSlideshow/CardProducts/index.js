import React from 'react';
import PropTypes from 'prop-types';

const CardProduct = ({property}) => {
    const{index, picture, name, price, color,} = property;

    return(
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={name}/>
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="item-details">
                    {price}<br/>
                    {name + ':'} {color}
                </p>
            </div>
        </div>
    )
}
export default CardProduct;