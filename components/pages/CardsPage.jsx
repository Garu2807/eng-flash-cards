const React = require('react')


function CardsPage({card, topic}) {
    return (
        <Layout>
          <h1>{topic.topic}</h1>
          <div class="container"></div>
          <div class="card">
          <p>{card.word}</p>
          <p>{card.translate}</p>
          </div>
        </Layout>
      );
    }

module.exports = CardsPage
