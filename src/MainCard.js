import React, { useState, useEffect } from 'react';
import './MainCard.css'; // Importamos el archivo de estilos
import vectorGraphic from './images/vector.svg';
import axios from 'axios';
import SmallCard from './SmallCard';

const MainCard = ({ nombre, descripcion }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => {
        setItems(response.data); // Almacena los datos obtenidos en el estado
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="main-card-container">
      <div className="main-card-content">
        <h2>{nombre}</h2>
        <div className="text">
          <p>{descripcion}</p>
        </div>
        <div className="options-container">
          <div className="option highlighted">All Products</div>
          <div className="option">Available Now</div>
        </div>
        <img src={vectorGraphic} alt="Vector Graphic" className="vector-graphic" />
        <div className="small-cards-grid">
          {items.map(item => (
            <SmallCard key={item.id} item={item} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default MainCard;