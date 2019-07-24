import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Views/Home/NavBar/NavBar'

import routes from './Routes';

function App() {
  return (
    <div className="healthy-home">
      <Router>
        <NavBar />
        {routes}
      </Router>
    </div>
  );
}

export default App;
