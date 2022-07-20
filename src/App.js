import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path="/search/:searchTerm" element={<div className='app_page'>
        <Sidebar/>
        <SearchPage/>
      </div>}>
        </Route>
        <Route path="/"  element= {<div className='app_page'>
        <Sidebar/>
        <RecommendedVideos/>
      </div>}/>
      </Routes>
    </Router>
      {/* <Header/>
       */}
    </div>
  );
}

export default App;
