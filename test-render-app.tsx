import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';

try {
  const html = ReactDOMServer.renderToString(<App />);
  console.log("App render successful, html length:", html.length);
} catch (e) {
  console.error("App render failed:", e);
}
