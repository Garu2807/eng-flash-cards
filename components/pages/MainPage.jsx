const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout  user={user} title="name">
      <h1>Привет!</h1>
      <h2>Чтобы продолжить - зарегистрируйся или войди</h2>
    </Layout>
  );
}

module.exports = MainPage;
