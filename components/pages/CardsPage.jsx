const React = require('react');
const Layout = require('../../components/pages/Layout');

function CardsPage({ cards, topic, user }) {
  return (
    <Layout user={user}>
      <h1>{topic.topic}</h1>
      <div className="container">
        <div className="cards-container">
          {cards.map((card) => (
            <div className="flipper">
              <div className="card-front">
                <div className="word">{card.word}</div>
              </div>
              <div className="card-back">
                <div className="translate"> {card.translate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = CardsPage;
