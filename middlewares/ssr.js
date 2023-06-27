const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponentMethod(component, props, options = { doctype: true }) {
  const el = React.createElement(component, props);

  const html = ReactDOMServer.renderToStaticMarkup(el);

  return options.doctype ? `<!DOCTYPE html>${html}` : html;
}

function ssr(req, res, next) {
  /*   обогащаем наш объект res новой функцией, которую будет вызывать позже в наших роутах */
  res.renderComponent = renderComponentMethod;
  /*   обязательно отправляем запрос дальше в функцию */
  next();
}

module.exports = ssr;