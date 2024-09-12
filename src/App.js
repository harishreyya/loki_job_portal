import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Jobs from './Pages/Jobs';
import Bookmarks from './Pages/Bookmarks';
import JobDetails from './Pages/JobDetails';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/job-details" element={<JobDetails />} />
        </Routes>
        <nav className="bottom-nav">
          <Link to="/">Jobs</Link>
          <Link to="/bookmarks">Bookmarks</Link>
        </nav>
      </div>
    </Router>
  );
};

export default App;
