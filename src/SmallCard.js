// SmallCard.js

import React from 'react';
import './SmallCard.css';
import estrella from './images/Star_fill.svg'
import estrellaV from './images/Star.svg'

const SmallCard = ({ item }) => {
    const { image, name, price, rating, votes, popular, available } = item;

    return (
        <div className="small-card">
            {popular && <div className="popular-label">Popular</div>}
            <img src={image} alt={name} className="item-image" />
            <div className="parent">
                <div className="div1"> <h3 className="item-name">{name}</h3></div>
                <div className="div2"> <div className={`item-price ${available ? 'available' : 'unavailable'}`}>{price}</div></div>
            </div>

            <div class="parent">
                <div class="div1">
                    <div className="item-rating">
                        {votes ? (
                            <img src={estrella} alt="Estrella con votes" className="star-icon" />
                        ) : (
                            <img src={estrellaV} alt="Estrella sin votes" className="star-icon" />
                        )}
                        <span className="rating-value">{rating} ({votes} votos)</span>
                    </div>
                </div>
                <div class="div2">
                    {!available && <div className="unavailable-text">Sold Out</div>}
                </div>
            </div>


        </div>
    );
}

export default SmallCard;
