const React = require('react');
const Layout = require('./Layout');

function RegisterForm({ user }) {
    return(
        <Layout user={user}>
      <form action = '/api/auth/register'  id="form-register" method = 'POST'>
        <h2>Регистрация</h2>
        <div>
          <label className="form-label">
            Логин
            <input type="text" className="form-control" name="login" />
          </label>
        </div>
        <div>
          <label className="form-label">
            Пароль
            <input type="password" className="form-control" name="password" />
          </label>
        </div>
        <button type="submit">
          Зарегистрироваться
        </button>
      </form>
      <script defer src="/js/auth.js" />
    </Layout>
    );
}

module.exports = RegisterForm

