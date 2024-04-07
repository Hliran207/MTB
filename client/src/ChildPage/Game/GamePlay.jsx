import React, { useState, useEffect, useRef } from "react";
import GameCards from "./GameCards";
import emoji1 from "../gamepics/emoji1.webp";
import emoji2 from "../gamepics/emoji2.png";
import emoji3 from "../gamepics/emoji3.webp";
import emoji4 from "../gamepics/emoji4.jpg";
import emoji5 from "../gamepics/emoji5.jpg";
import emoji6 from "../gamepics/emoji6.jpg";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
} from "@material-ui/core";

const uniqueCardsArray = [
  {
    type: "emoji1",
    image: emoji1,
  },
  {
    type: "emoji2",
    image: emoji2,
  },
  {
    type: "emoji3",
    image: emoji3,
  },
  {
    type: "emoji4",
    image: emoji4,
  },
  {
    type: "emoji5",
    image: emoji5,
  },
  {
    type: "emoji6",
    image: emoji6,
  },
];

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
export default function GamePlay() {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(() => {
    const storedBestScore = localStorage.getItem("bestScore");
    return storedBestScore
      ? JSON.parse(storedBestScore)
      : Number.POSITIVE_INFINITY;
  });
  const timeout = useRef(null);
  //Function to disable all cards.
  const disable = () => {
    setShouldDisableAllCards(true);
  };
  //Function to enable all cards.
  const enable = () => {
    setShouldDisableAllCards(false);
  };
  //Function to check if the game has been completed.
  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };
  //Function to evaluate the correctness of the selected cards.
  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  //Function to handle click events on cards.
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  // Function to check if a card at a given index is flipped.
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  //Function to check if a card is inactive (already cleared).
  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };
  //Function to handle restarting the game.
  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };

  return (
    <div className="Game">
      <header>
        <h3>שחקו במשחק הזיכרון</h3>
        <div>
          מצאו את כל הקלפים הזהים,בחירה נכונה של זוג קלפים זהים יעלים אותם מהמסך
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => (
          <GameCards
            key={index}
            card={card}
            index={index}
            isDisabled={shouldDisableAllCards}
            isInactive={checkIsInactive(card)}
            isFlipped={checkIsFlipped(index)}
            isMatched={clearedCards[card.type]} // Pass whether the card is matched
            onClick={handleCardClick}
          />
        ))}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">צעדים:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">השיא שלך:</span> {bestScore}
            </div>
          )}
        </div>
        <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            התחל מחדש
          </Button>
        </div>
      </footer>
      <Dialog
        open={showModal}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            setShowModal(false);
          }
        }}
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          "כל הכבוד סיימת את המשחק!!!"
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            סיימת את המשחק ב {moves} צעדים. השיא שלך הוא {bestScore} צעדים.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            התחל מחדש
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
