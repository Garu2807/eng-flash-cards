const React = require('react');

function Header({ user }) {
  let contentNavBar;
  if (user) {
    contentNavBar = (
      <>
        <div>{`Привет, ${user.login}!`}</div>
        <a href="/">
          Главная
        </a>
        <a href="/profile">
          Профиль
        </a>
        <a href="/logout">
          Выйти
        </a>
      </>
    );
  } else {
    contentNavBar = (
      <>
        <div>Привет!</div>
        <a href="/register" className="a">Регистрация</a>
        <a href="/login" className="a">Вход</a>
      </>
    );
  }

  return (
    <header>
      <nav>
        <div className="container">
          <a href="/">
          </a>
          <div>{contentNavBar}</div>
        </div>
      </nav>
    </header>
  );
}


module.exports = Header;