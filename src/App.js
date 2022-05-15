import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Contact from './Components/Contact'
import Favorites from './Components/Favorites'
import WeatherDisplay from './Components/WeatherDisplay'
import './App.css';

function App() {
  const forcastKey = '5PAFXNYdptA8Mr0bJznA4UgxeKYbP6tg';
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  var d = new Date();
  var name5Days = [days[d.getDay()], days[d.getDay() + 1], days[d.getDay() + 2], days[d.getDay() + 3], days[d.getDay() + 4]]
  const [currentData, setCurrentData] = useState([{"LocalObservationDateTime":"2022-05-15T12:36:00+02:00","EpochTime":1652610960,"WeatherText":"Mostly sunny","WeatherIcon":2,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":true,"Temperature":{"Metric":{"Value":31.8,"Unit":"C","UnitType":17},"Imperial":{"Value":89.0,"Unit":"F","UnitType":18}},"MobileLink":"http://www.accuweather.com/en/cd/lieki/111111/current-weather/111111?lang=en-us","Link":"http://www.accuweather.com/en/cd/lieki/111111/current-weather/111111?lang=en-us"}])
  const [data5Days, setData5Days] = useState();
  const [maximumTemp, setMaximumTemp] = useState()
  const [favoritesList, setFavoritesList] = useState([])
  const [cityName, setCityName] = useState('Kiryat Gat')
  const [key, setKey] = useState('111111')
  
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async function(position) {
        await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${forcastKey}&q=${position.coords.latitude},${position.coords.longitude}`)
        .then(res => res.json())
        .then(result => {
          setKey(result.Key);
        });
      });
    }
    fetchData();
    getCurrentWeather()
    get5DaysWeather();
  }, [])

  const getCityKey = async (place) => {
    const baseUrlKey = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryKey = `?apikey=${forcastKey}&q=${place}`
    await fetch(baseUrlKey + queryKey)
    .then(res => res.json())
    .then(res => {setCityName(res[0].LocalizedName); setKey(res[0].Key)})
    get5DaysWeather();
    getCurrentWeather();
  }
  
const get5DaysWeather = async () => {
    const baseUrlWeatherData5Days = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
    const queryWeatherData5Days = `${key}?apikey=${forcastKey}`
    await fetch(baseUrlWeatherData5Days + queryWeatherData5Days)
    .then(res =>res.json())
    .then(res => setData5Days(res))
}

const getCurrentWeather = async () => {
    const baseUrlCurrentWeatherData = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const queryCurrentWeatherData = `${key}?apikey=${forcastKey}`
    await fetch(baseUrlCurrentWeatherData + queryCurrentWeatherData)
    .then(res =>res.json())
    .then(res => setCurrentData(res))
  }

  const favoritesFunc = (isFav) => {
    if (isFav == true) {
      let thisFavoriteCity = {
        favoritekeyNumber: key,
        favoriteCityName: cityName
      }
      setFavoritesList([...favoritesList, thisFavoriteCity])
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
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
