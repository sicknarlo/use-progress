/***  examples/src/index.js ***/
import React from 'react';
import { render } from 'react-dom';
import 'nprogress/nprogress.css';
import './index.css';
import useProgress from '../../src';
function App() {
  useProgress(false);
  return (
    <div style={{ minHeight: '100vh' }}>Foo!</div>
  )
}
render(<App />, document.getElementById("root"));