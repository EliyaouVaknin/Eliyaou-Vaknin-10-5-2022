import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Contact from './Components/Contact'
import Favorites from './Components/Favorites'
import WeatherDisplay from './Components/WeatherDisplay'
import './App.css';

function App() {

  const forcastKey = 'UU8k10S5KKy3tgmzVbxpsvEpAgDY3qNJ';
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  var name5Days = [days[d.getDay()], days[d.getDay() + 1], days[d.getDay() + 2], days[d.getDay() + 3], days[d.getDay() + 4]]
  const [currentData, setCurrentData] = useState([])
  const [data5Days, setData5Days] = useState('');
  const [favoritesList, setFavoritesList] = useState([])
  const [cityName, setCityName] = useState('')
  const [key, setKey] = useState('')
  var d = new Date();
  var tmpKey = '';

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${forcastKey}&q=${position.coords.latitude},${position.coords.longitude}`)
          .then(res => res.json())
          .then(res => { setKey(res.Key); tmpKey = res.Key; setCityName(res.LocalizedName); });

        await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${tmpKey}?apikey=${forcastKey}`)
          .then(res => res.json())
          .then(res => setCurrentData(res))

        await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${tmpKey}?apikey=${forcastKey}`)
          .then(res => res.json())
          .then(res => setData5Days(res))
      });
    }
    fetchData();
  }, [])

  const getCityKey = async (place) => {
    await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${forcastKey}&q=${place}`)
      .then(res => res.json())
      .then(res => { setCityName(res[0].LocalizedName); setKey(res[0].Key); tmpKey = res[0].Key })

    await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${tmpKey}?apikey=${forcastKey}`)
      .then(res => res.json())
      .then(res => setCurrentData(res))

    await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${tmpKey}?apikey=${forcastKey}`)
      .then(res => res.json())
      .then(res => setData5Days(res))
  }

  const getCurrentWeather = async () => {
    const baseUrlCurrentWeatherData = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const queryCurrentWeatherData = `${tmpKey}?apikey=${forcastKey}`
    await fetch(baseUrlCurrentWeatherData + queryCurrentWeatherData)
      .then(res => res.json())
      .then(res => setCurrentData(res))
  }

  const favoritesFunc = (isFav) => {
    let tmpFavArray = favoritesList;
    console.log(favoritesList)
    if (isFav == true) {
      let thisFavoriteCity = {
        favoritekeyNumber: key,
        favoriteCityName: cityName
      }
      tmpFavArray.push(thisFavoriteCity);
      setFavoritesList(tmpFavArray)
    } else {
      let tmpArray = [];
      for (let i = 0; i < favoritesList.length; i++) {
        if (favoritesList[i].favoriteCityName != cityName) {
          tmpArray.push(favoritesList[i]);
        }
      }
      setFavoritesList(tmpArray);
    }
  }

  const isFavorites = (cityName) => {
    for (let i = 0; i < favoritesList.length; i++) {
      if (favoritesList[i].favoriteCityName == cityName) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Header getCityKey={getCityKey} forcastKey={forcastKey} />
        <Routes>
          <Route path='/' element={<WeatherDisplay data5Days={data5Days} name5Days={name5Days} currentData={currentData} cityName={cityName} favoritesFunc={favoritesFunc} isFavorites={isFavorites} />} />
          <Route path='/favorites' element={<Favorites favoritesList={favoritesList} getCurrentWeather={getCurrentWeather} forcastKey={forcastKey} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
