const React = require('react');
const Layout = require('../../components/pages/Layout');

function CardsPage({ cards, topic, user }) {
  return (
    <Layout user={user}>
      <h1>{topic.topic}</h1>
      <div class="container"></div>
      <div>
        {cards.map((card) => (
          <>
            <div>{card.word}</div>
            <div>{card.translate}</div>
          </>
        ))}
      </div>
    </Layout>
  );
}

module.exports = CardsPage;
