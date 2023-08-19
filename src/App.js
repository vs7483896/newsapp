import './App.css';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =() => {
  const name = "vivek";
  const page = 15;
  const newsAPIKey = process.env.REACT_APP_NEWS_API_KEY;

  const setProgressVal = (progress) => {
    setProgess({ progress: progress })
  }
  const [progress, setProgess] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="general" pagesize={page} country="in" category="general" />} /> {/*here key parameter is used so that every request should be mounted and exact paramter is used to match the exact path*/}
          <Route exact path="/home" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="general" pagesize={page} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="business" pagesize={page} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="entertainment" pagesize={page} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="general" pagesize={page} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="health" pagesize={page} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="science" pagesize={page} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="sports" pagesize={page} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgressVal} newskey={newsAPIKey} key="technology" pagesize={page} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App;
