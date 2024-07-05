import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Text from './pages/text';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/*' element={<Home/>} />
          <Route path='/text' element={<Text/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
