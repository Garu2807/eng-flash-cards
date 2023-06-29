const React = require('react');
const Layout = require('./Layout');

function LoginForm({ user }) {
    return(
        <Layout user={user}>
            <form action='/api/auth/login' id="form-login"  method='POST'>
                <h2>Авторизация</h2>
                <div>
                    <label>
                        Логин
                        <input type="text" name="login" />
                    </label>
                </div>
                <div>
                    <label>
                        Пароль
                        <input type="password" className="form-control" name="password" />
                    </label>
                </div>
                <button type="submit">
                    Войти
                </button>
            </form>
            <script defer src="/js/auth.js" />
        </Layout>

    );
}

module.exports = LoginForm;