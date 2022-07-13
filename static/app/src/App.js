import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


import Main from './Main';
import VideoWall from './components/VideoWall';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route path="/about" element={<VideoWall />}/>
        </Routes>
    </Router>
  );
}

export default App;
