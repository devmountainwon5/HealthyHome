import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import routes from './Routes';

function App() {
  return (
    <div className="healthy-home">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
