import React from "react";
import classnames from "classnames";

const Gamecard = ({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled,
  isMatched, // New prop indicating whether the card is matched or not
}) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && !isMatched && onClick(index); // Only allow click if card is not flipped, not disabled, and not already matched
  };

  return (
    <div className="GameCards">
      {!isMatched && ( // Only render the card if it's not already matched
        <div
          className={classnames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive,
          })}
          onClick={handleClick}
        >
          <div className="card-face card-font-face">
            {isFlipped ? (
              <img src={card.image} alt="Card" />
            ) : (
              <img src="/breath5.jpg" alt="MTB" />
            )}
          </div>
          <div className="card-face card-back-face">
            {isFlipped && <img src={card.image} alt="Card" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gamecard;
