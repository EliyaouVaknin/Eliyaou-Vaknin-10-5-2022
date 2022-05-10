import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Contact from './Components/Contact'
import Favorites from './Components/Favorites'
import Search from './Components/Search'
import WeatherDisplay from './Components/WeatherDisplay'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      <Header />
      <Search />
        <Routes>
          <Route path='/' element={<WeatherDisplay />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
