const React = require('react');
const Layout = require('./Layout');
function LoginForm({ user }) {
  return (
    <Layout user={user}>
      <form
        action="/api/auth/login"
        id="form-login"
        method="POST"
        style={{ marginTop: '30px' }}
      >
        <h2>Авторизация</h2>
        <div className="mb-3">
          <label className="form-label">
            Логин
            <input required type="text" className="form-control" name="login" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Пароль
            <input required type="password" className="form-control" name="password" />
          </label>
        </div>
        <button type="submit" className="btn btn-outline-warning">
          Войти
        </button>
      </form>
      <script defer src="/js/auth.js" />
    </Layout>
  );
}

module.exports = LoginForm;
