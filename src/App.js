import React from 'react';

import Counter from './Counter.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Counter text= "adulto" init = {1}/>
      {/* <InputStepper  text="adultos" min={0}  max={3} initialValue={1}/> */}
    </div>
  );
}

export default App;
