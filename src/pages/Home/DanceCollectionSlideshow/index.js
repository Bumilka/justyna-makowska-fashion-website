import React, { Component } from 'react';
import './style.scss';
import CardProduct from './CardProducts/index';
import DataProduct from './DataProducts/index';

class DanceCollectionSlideshow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: DataProduct.properties,
            property: DataProduct.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: DataProduct.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: DataProduct.properties[newIndex]
        })
    }

    render() {
        const { properties, property } = this.state;
        return (
            <div>
                <div className="botton-container">    
                    <button className="button-next"
                        onClick={() => this.nextProperty()}
                        disabled={property.index ===
                            DataProduct.properties.length - 1}
                    >&#8249;</button>
                    
                    <button className="button-previous"
                        onClick={() => this.prevProperty()}
                        disabled={property.index === 0}
                    >&#8250;</button>
                </div>
                <div className="slideshow-container">

                    <div className={`cards-slider active-slide-${property.index}`} >
                        <div className="cards-slider-wrapper" style={{
                            transform: `translateX(-${property.index*(100/properties.length)}%)`
                        }}>
                        {
                            properties.map(property =><CardProduct key={property._id} property={property} /> )
                        }
                            
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default DanceCollectionSlideshow;
