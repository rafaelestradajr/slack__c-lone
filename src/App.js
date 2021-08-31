import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar  from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
    <h1>lets build slack clone</h1>

    
    <Header/>
    <div className="app__body">
      <Sidebar/>
    
    </div>
   
    </div>
  );
}

export default App;
