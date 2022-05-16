import React, { useState, useEffect } from 'react'
import '../Styles/Favorites.css'

export default function Favorites({ favoritesList, forcastKey }) {
  const [favoritesListTemp, setFavoritesListTemp] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let favArray = [];
      for (let i = 0; i < favoritesList.length; i++) {
        await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${favoritesList[i].favoritekeyNumber}?apikey=${forcastKey}`)
        .then(res =>res.json())
        .then(res => 
          favArray.push({
            temp: res[0].Temperature.Metric.Value,
            name: favoritesList[i].favoriteCityName
          }))
      }
      setFavoritesListTemp(favArray);
    }
    fetchData();
  }, [])

  return (
    <div className="container-fluid">
      <div className="row px-5">
        {favoritesListTemp.map((f) => {
          return (
            <div className="favoriteCard card col-md-3 mb-2">
              <h2>{f.temp}&#8451;</h2>
              <h2>{f.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
