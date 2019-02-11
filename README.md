# use-progress

### Add and control progress bars across the top of any page easily with a React Hook
<br/>

### Installation

```
npm install --save use-progress
```

### Importing the hook

```javascript
import useProgress from ' use-progress'  
```

### Usage

By default, the progress bar will start when a component first begins to mount, and finish when it first renders/completes.

```jsx
import React from 'react';
import { render } from 'react-dom';
import 'use-progress/use-progress.css';
import useProgress from 'use-progress';

function App() {
  useProgress();
  return (
    <div style={{ minHeight: '100vh' }}>Foo!</div>
  )
}
render(<App />, document.getElementById("root"));
```
By default `useProgress` will only track whether a component has finished mounting. You can override this functionality and control when its complete by passing `mountOnly: false` and manually invoking the provided `done` function.

```jsx
const wait = (done) => setTimeout(() => done(), 1000);

function App() {
  const [status, done] = useProgress({ mountOnly: false });
  wait(done);
  return (
    <div style={{ minHeight: '100vh' }}>Foo!</div>
  )
}
```
## Arguments

| Arguments      | Type     | Description                                                                                                                           | Default value |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| mountOnly      | boolean  | By default nprogreess will run until component finishes mounting. Passing false to this will wait for the user to manually call done. | true          |
| configure      | Object   | Object of all possiblee nprogress configs that can be found https://github.com/rstacruz/nprogress                                     | true          |

## Return Values

| Arguments | Type   | Description                                               |
| --------- | ------ | --------------------------------------------------------- |
| status    | Number | Number between 0.0 and 1 indicating current progress      |
| done      | func   | Done function that can be invoked if `mountOnly` is false |