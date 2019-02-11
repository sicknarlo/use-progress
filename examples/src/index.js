/***  examples/src/index.js ***/
import React from 'react';
import { render } from 'react-dom';
import '../../src/use-toggle.css';
import useProgress from '../../src';

const wait = (done) => setTimeout(() => done(), 1000);

function App() {
  const [status, done] = useProgress({ mountOnly: false });
  wait(done);
  return (
    <div style={{ minHeight: '100vh' }}>Foo!</div>
  )
}

render(<App />, document.getElementById("root"));