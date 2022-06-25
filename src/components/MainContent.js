import React, { useState } from "react";
import Card from "./Card";
import '../styles/mainContent.css';

function MainContent(props) {

    const { cards, onClickCard } = props;


    return (
        <main>
            {cards.map(card => {
                return <Card key={card.title} cardTitle={card.title}
                    imgPath={card.imgPath} onClick={onClickCard} />
            })}
        </main>
    );
}

export default MainContent;