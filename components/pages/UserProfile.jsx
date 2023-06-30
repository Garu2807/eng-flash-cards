const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function UserProfile({ user, cards, topics }) {
  return (
    <Layout user={user} title="Flashcards">
      <div>
        <h2>{user.login}</h2>
      </div>
      <div>
        <p className="card-text">
          <b>Имя:</b>
          {user.login}
        </p>
      </div>
      <div>
        <h3>Добавить свою карточку</h3>
        {/* action - url на который будет отправлен запрос из формы */}
        <form id="add-card-form" className="containerCard">
          <div>
            Тема:
            <select name="topic" required>
              {topics.map((topic) => (
                <option value={topic.id}>{topic.topic}</option>
              ))}
            </select>
          </div>
          <div className="eng">
            Слово на английском языке:
            <input name="word" required />
          </div>
          <div className="ru">
            Слово на русском языке:
            <input name="translate" required />
          </div>
          <button type="submit" className="btn btn-success">
            Готово
          </button>
        </form>
      </div>
      <div
        id="topic-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '100%',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
      <script defer src="/js/addcard.js" />
    </Layout>
  );
}

module.exports = UserProfile;
