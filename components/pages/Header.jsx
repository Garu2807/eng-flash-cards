const React = require('react');

function Header() {
  return (
    <nav className='nav-content'>
      <form>
        <a href="/" className="a btn btn-success">Главная</a>
        <a href="/register" className="a btn btn-warning">Регистрация</a>
        <a href="/login" className="a btn btn-dark">Войти</a>
      </form>
    </nav>
  );
}

module.exports = Header;