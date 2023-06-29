const React = require('react');

function Header({ user }) {
  let contentNavBar;
  if (user) {
    contentNavBar = (
      <>
        <div className="nav-item nav-link">{`Привет, ${user.login}!`}</div>
        <a href="/">Главная</a>
        <a className="btn btn-info" href="/profile">
          Профиль
        </a>
        <a className="btn btn-info" href="/logout">
          Выйти
        </a>
      </>
    );
  } else {
    contentNavBar = (
      <>
        <div className="nav-item nav-link">Привет!</div>
        <a className="btn btn-sm btn-outline-primary" href="/register">
          Регистрация
        </a>
        <a className="btn btn-sm btn-outline-primary" href="/login">
          Вход
        </a>
      </>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-between">
        <img className="logo" src="/images/logo.png" alt="eng" />
        <div className="container">
          <a className="navbar-brand" href="/">
            Mr.English
          </a>
          <div className="navbar-nav">{contentNavBar}</div>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

module.exports = Header;
