import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ComponentDetail } from './src/components/ComponentDetail';
import { componentsDB } from './src/data/componentsDB';

const comp = componentsDB[0]; // test with first component

try {
  const html = ReactDOMServer.renderToString(
    <ComponentDetail component={comp} onBack={() => {}} />
  );
  console.log("Render successful, html length:", html.length);
} catch (e) {
  console.error("Render failed:", e);
}
