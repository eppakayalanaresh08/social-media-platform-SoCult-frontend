import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainFile from './MainFile';
import User from './components/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFile />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
