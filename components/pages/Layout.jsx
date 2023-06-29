const React = require('react');
const Header = require('./Header');

function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href='/css/bootstrap.min.css'/>
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/auth.js" />
      </head>
      <body>
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
