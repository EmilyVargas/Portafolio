import React from 'react';
import "./card.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Card ({image, workstation, title, description, button}) {
  return (
    <div className="card-container">
        <div className="image-container">
            <img src={image} alt="" />
        </div>
        <div className="info-container"> 
            <div className="card-workstation">
                {workstation}
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-description">
                {description}
            </div>
            <button className="card-button">
                {button} <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    </div>
  )
}

export default Card;