import React from 'react';
import './App.css';

import {Header} from './Components/Header/header.component'
import {Calculator} from  './Components/Calculator/calculator.component'
import {Table} from './Components/Table/table.component'

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <Table/>
      
    </div>
  );
}

export default App;
