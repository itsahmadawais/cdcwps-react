import React from 'react';
import logo from './logo.svg';
import './App.css';
import Multiplier from './components/Multiplier';
import Substraction from './components/Substraction';
import Divider from './components/Divider';
import Counter from './components/Counter';

function App() {
  return (
    <div className='app'>
      <Multiplier/>
      <Substraction/>
      <Divider/>
      <Counter/>
    </div>
  );
}

export default App;
