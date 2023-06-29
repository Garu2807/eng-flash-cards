const React = require('react');
const Layout = require('./Layout');

function TopicPage({ topics, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <h2 id="topic-select"> Выбери тему</h2>

        <div id="topic-container">
          {topics.map((topic) => (
            <div className="card-back">
              <a href={`/topic/${topic.id}/cards`}>
                <h2>{topic.topic}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = TopicPage;
