import React from "react";
import '../styles/card.css';

function Card(props) {

    const { cardTitle, imgPath, onClick } = props;

    return (
        <div className="card-body" onClick={onClick} name={cardTitle}>
            <img className="card-img" src={`/img/${imgPath}.png`} alt={`Football team ${cardTitle}`} name={cardTitle} />
            <h6 className="card-title" name={cardTitle}>{cardTitle} </h6>
        </div>
    );
}

export default Card;