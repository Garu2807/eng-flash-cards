const React = require('react');
const Layout = require('./Layout');

function LoginForm({ user }) {
  return (
    <Layout user={user}>
      <form
        action="/login"
        id="form-login"
        method="POST"
        style={{ marginTop: '30px' }}
      >
        <h2>Авторизация</h2>
        <div className="mb-3">
          <label className="form-label">
            Логин
            <input type="text" className="form-control" name="login" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Пароль
            <input type="password" className="form-control" name="password" />
          </label>
        </div>
        <button type="submit" className="btn btn-outline-warning">
          Войти
        </button>
      </form>
    </Layout>
  );
}

module.exports = LoginForm;
