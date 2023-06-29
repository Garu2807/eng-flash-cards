const React = require('react');

function Header({ user }) {
  let contentNavBar;
  if (user) {
    contentNavBar = (
      <>
        <div>{`Привет, ${user.login}!`}</div>
        <a href="/">Главная</a>
        <a href="/profile" className="btn btn-info">
          Профиль
        </a>
        <a href="/logout" className="btn btn-dark">
          Выйти
        </a>
      </>
    );
  } else {
    contentNavBar = (
      <>
        <div>Привет!</div>
        <div className="logreg">
          <a href="/register" className="btn btn-info">
            Регистрация
          </a>
          <a href="/login" className="btn btn-dark">
            Вход
          </a>
        </div>
      </>
    );
  }

  return (
    <header>
      <nav>
        <div className="container">
          <a href="/"></a>
          <div>{contentNavBar}</div>
        </div>
      </nav>
    </header>
  );
}

module.exports = Header;
