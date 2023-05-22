import React, { useState } from 'react';
import './styles/global.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Video from './components/Video';
import Home from './components/Home';

function App() {
  return (
    <main className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/video/:id' element={<Video />}/>
            </Routes>
          </Router>
    </main>
  );
}

export default App;
