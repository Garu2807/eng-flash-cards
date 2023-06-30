const React = require('react');

function Card({ card, user }) {
  return (
    <div className="cards-container" data-id={card.id}>
      <div className="flipper">
        <h5 className="card-front">
          <a href={`/cards/${card.id}`}>{card.word}</a>
        </h5>
        <p className="card-back">{card.translate}</p>
      </div>
      </div>
  );
}

module.exports = Card;