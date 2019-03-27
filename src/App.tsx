import React from 'react';
import Input from '@material-ui/core/Input'
import './App.css';

const App = () => {
  const myRef = React.useRef()

  return (
    <div className="App">
      <input name="foo" ref={myRef}/>
      <Input inputRef={myRef}></Input>
    </div>
  );
}

export default App;
