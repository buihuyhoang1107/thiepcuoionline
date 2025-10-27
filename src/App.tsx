import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import WeddingInvitation from './components/WeddingInvitation';
import { weddingData } from './data/weddingData';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WeddingInvitation data={weddingData} />} />
          <Route path="/:template" element={<WeddingInvitation data={weddingData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
