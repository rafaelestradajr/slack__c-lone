import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar  from './Sidebare';

function App() {
  return (
    <div className="app">
    <h1>lets build slack clone</h1>

    
    <Header/>
    <div className="app__body">
      <Sidebar/>
    
    </div>
    {/*sidbar*/}
    {/*react-router-> chat screen*/}
    </div>
  );
}

export default App;
