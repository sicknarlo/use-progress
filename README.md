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
You can pass in a boolean to indicate whether a component is ready beyond waiting to mount, such as when data is ready.

```jsx
useProgress(data.isReady);
```
## Arguments

| Arguments      | Type     | Description                                     | Default value |
| -------------- | -------- | ----------------------------------------------- | ------------- |
| isLoaded       | boolean  | Whether any loading is complete                 | true         |