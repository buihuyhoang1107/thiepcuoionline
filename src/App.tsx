import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import WeddingInvitation from './pages/wedding1/WeddingInvitation';
import BirthdayPage from './pages/birthday1/BirthdayPage';
import { weddingData } from './data/weddingData';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WeddingInvitation data={weddingData} />} />
          <Route path="/sinhNhatThang11" element={<BirthdayPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
