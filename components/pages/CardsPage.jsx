const React = require('react');
const Layout = require('../../components/pages/Layout');

function CardsPage({ cards, topic, user }) {
  return (
    <Layout user={user}>
      <h1>{topic.topic}</h1>
      <div className="container">
        <div className="cards-container">
          {cards.map((card) => {
            if (!card.users[0].Statistics.dataValues.studied) {
              return (
                <div className="flipper" data-card-id={card.id}>
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
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = CardsPage;
