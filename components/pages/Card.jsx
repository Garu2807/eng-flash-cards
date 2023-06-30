const React = require('react');

function Card({ card, user }) {
  return (
    <div className="cards-container" data-id={card.id}>
    <div className="flipper">
                   <div className="card-front">
                     <div className="word">{card.word}</div>
                     <button type="button" class="btn btn-success translate-btn">
                       Посмотреть перевод
                     </button>
                   </div>
                   <div className="card-back">
                     <div className="translate"> {card.translate}</div>
                     <button type="button" class="btn btn-success studied-btn">
                       Изучено
                     </button>
                     <img src="/images/icon.png" alt="" className="back-btn" />
                   </div>
                 </div>
       </div>
  );
}

module.exports = Card;