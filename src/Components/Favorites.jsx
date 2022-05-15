import React, { useState, useEffect } from 'react'
import '../Styles/Favorites.css'

export default function Favorites({ favoritesList, forcastKey }) {
  const [favoritesListTemp, setFavoritesListTemp] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      for (let i = 0; i < favoritesList.length; i++) {
        const baseUrlCurrentWeatherData = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const queryCurrentWeatherData = `${favoritesList[i].favoritekeyNumber}?apikey=${forcastKey}`
        await fetch(baseUrlCurrentWeatherData + queryCurrentWeatherData)
        .then(res =>res.json())
        .then(res => setFavoritesListTemp([...favoritesListTemp, {
          temp: res[0].Temperature.Metric.Value,
          name: favoritesList[i].favoriteCityName
        }]))
      }
    }
    fetchData();
  }, [])


  return (
    <div className="container-fluid">
      <div className="row px-5">
        {favoritesListTemp.map((f) => {
          return (
            <div className="favoriteCard card col-md-3 mb-2">
              <h2>{f.name}</h2>
              <h2>{f.temp}&#8451;</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
