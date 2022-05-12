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
  var key = 555555;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  var d = new Date();
  var name5Days = [days[d.getDay()], days[d.getDay() + 1], days[d.getDay() + 2], days[d.getDay() + 3], days[d.getDay() + 4]]

  //Hooks
  const [currentData, setCurrentData] = useState([[
    {
      "LocalObservationDateTime": "2022-05-11T12:28:00+03:00",
      "EpochTime": 1652261280,
      "WeatherText": "Mostly cloudy",
      "WeatherIcon": 6,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 25.0,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 77.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/current-weather/2-215752_1_al?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/current-weather/2-215752_1_al?lang=en-us"
    }
  ]])
  const [data5Days, setData5Days] = useState([
    {
      "Headline": {
        "EffectiveDate": "2022-05-15T08:00:00+03:00",
        "EffectiveEpochDate": 1652590800,
        "Severity": 7,
        "Text": "Becoming warmer, then turning noticeably cooler again Sunday and Monday",
        "Category": "cooler",
        "EndDate": "2022-05-16T20:00:00+03:00",
        "EndEpochDate": 1652720400,
        "MobileLink": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2022-05-11T07:00:00+03:00",
          "EpochDate": 1652241600,
          "Temperature": {
            "Minimum": {
              "Value": 53.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 82.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=1&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=1&lang=en-us"
        },
        {
          "Date": "2022-05-12T07:00:00+03:00",
          "EpochDate": 1652328000,
          "Temperature": {
            "Minimum": {
              "Value": 54.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 82.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=2&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=2&lang=en-us"
        },
        {
          "Date": "2022-05-13T07:00:00+03:00",
          "EpochDate": 1652414400,
          "Temperature": {
            "Minimum": {
              "Value": 68.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 90.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=3&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=3&lang=en-us"
        },
        {
          "Date": "2022-05-14T07:00:00+03:00",
          "EpochDate": 1652500800,
          "Temperature": {
            "Minimum": {
              "Value": 70.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 96.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 30,
            "IconPhrase": "Hot",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=4&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=4&lang=en-us"
        },
        {
          "Date": "2022-05-15T07:00:00+03:00",
          "EpochDate": 1652587200,
          "Temperature": {
            "Minimum": {
              "Value": 60.0,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 92.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=5&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/beersheba/2-215752_1_al/daily-weather-forecast/2-215752_1_al?day=5&lang=en-us"
        }
      ]
    }
  ]);
  const [favoritesList, setFavoritesList] = useState([])
  const [cityName, setCityName] = useState('Kiryat Gat')


  //Functions
  const getCityKey = async (place) => {
    const baseUrlKey = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryKey = `?apikey=${forcastKey}&q=${place}`
    // await fetch(baseUrlKey + queryKey)
    // .then(res => res.json())
    // .then(res => key = res[0].Key)
    // .then(res => setCityName(res[0].LocalizedName))


    // const baseUrlWeatherData5Days = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
    // const queryWeatherData5Days = `${key}?apikey=${forcastKey}`
    // await fetch(baseUrlWeatherData5Days + queryWeatherData5Days)
    // .then(res =>res.json())
    // .then(res => setData5Days(res))

    // const baseUrlCurrentWeatherData = 'http://dataservice.accuweather.com/currentconditions/v1/'
    // const queryCurrentWeatherData = `${key}?apikey=${forcastKey}`
    // await fetch(baseUrlCurrentWeatherData + queryCurrentWeatherData)
    // .then(res =>res.json())
    // .then(res => setCurrentData(res))
    // .then(console.log(currentData[0][0].Temperature.Metric.Value))
  }

  const favoritesFunc = (e) => {
    let status = e.target.checked;
    if (status == true) {
      let thisFavoriteCity = {
        favoritekeyNumber: key,
        favoriteCityName: cityName
      }
      setFavoritesList([...favoritesList, thisFavoriteCity])
    } else {
      for (let i = 0; i < favoritesList.length; i++) {
        if (favoritesList[i].favoriteCityName == cityName) {
          setFavoritesList(favoritesList.splice(i-1, 1));
        }
      }
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
useEffect(() => {
  console.log(favoritesList)
},[favoritesList])


return (
  <div className="App">
    <Router>
      <Sidebar />
      <Header getCityKey={getCityKey} forcastKey={forcastKey} />
      <Routes>
        <Route path='/' element={<WeatherDisplay data5Days={data5Days} name5Days={name5Days} currentData={currentData} cityName={cityName} favoritesFunc={favoritesFunc} isFavorites={isFavorites} />} />
        <Route path='/favorites' element={<Favorites favoritesList={favoritesList} />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;
