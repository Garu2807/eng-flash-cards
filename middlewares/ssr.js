const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponentMethod(component, props, options = { doctype: true }) {
  const el = React.createElement(component, {...props, ...this.locals});

  const html = ReactDOMServer.renderToStaticMarkup(el);

  return options.doctype ? `<!DOCTYPE html>${html}` : html;
}

function ssr(req, res, next) {

  res.renderComponent = renderComponentMethod;

  next();
}

module.exports = ssr;