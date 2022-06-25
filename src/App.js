import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import './styles/app.css';

function App() {
  const [scores, setScores] = useState({ currentScore: 0, bestScore: 0 });

  const [cards, setCards] = useState([{ title: 'Grêmio', imgPath: 'gremio' },
  { title: 'Internacional', imgPath: 'internacional' },
  { title: 'Atlético Mineiro', imgPath: 'atletico-mineiro' },
  { title: 'Flamengo', imgPath: 'flamengo' },
  { title: 'Palmeiras', imgPath: 'palmeiras' },
  { title: 'Fortaleza', imgPath: 'fortaleza' },
  { title: 'Corinthians', imgPath: 'corinthians' },
  { title: 'RB Bragantino', imgPath: 'bragantino' },
  { title: 'Fluminense', imgPath: 'fluminense' },
  { title: 'América-MG', imgPath: 'america-mg' },
  { title: 'Atlético-GO', imgPath: 'atletico-go' },
  { title: 'Santos', imgPath: 'santos' }
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  const shuffleArray = () => {
    setCards([...cards.sort(() => Math.random() - 0.5)]);
  }

  const clearGame = () => {
    setScores({ currentScore: 0, bestScore: 0 });
    setClickedCards([]);
  }


  const onClickCard = (e) => {
    if (!clickedCards.includes(e.target.name)) {
      setClickedCards([e.target.name, ...clickedCards]);
      console.log(clickedCards);

      const isNewRecord = scores.bestScore < (scores.currentScore + 1);
      setScores({
        currentScore: (scores.currentScore + 1),
        bestScore: (isNewRecord ? scores.currentScore + 1 : scores.bestScore)
      });
    } else {
      clearGame();
    }
    shuffleArray();
  }




  return (
    <div className="app">
      <Navbar currentScore={scores.currentScore} bestScore={scores.bestScore} />
      <MainContent cards={cards} onClickCard={onClickCard} />
    </div>
  );
}

export default App;
