const React = require('react');
const Header = require('./Header')

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}


module.exports = Layout;