import React from 'react'
import '../Styles/WeatherDisplay.css'

export default function WeatherDisplay({ currentData, name5Days, data5Days, cityName, favoritesFunc }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div id='ThisWeatherCard' className="card col-md-12">
          <div className="card-body">
            <div className="row">
            <h1 className='col-md-10'>{cityName}</h1>
            <div className="form-check col-md-2">
              <input onChange={(e) => favoritesFunc(e)} className="form-check-input" type="checkbox" id="AddToFavoritesCheckBox"></input>
              <label className="form-check-label" for="flexCheckDefault">
                Favorite
              </label>
            </div>
            </div>
            <h1>{currentData[0][0].Temperature.Metric.Value}C</h1>
            <h3>{currentData[0][0].WeatherText}</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col dayCard mx-3" >
            <h2>{name5Days[0]}</h2>
            <h1>{data5Days[0].DailyForecasts[0].Temperature.Minimum.Value}</h1>
            <h1>{data5Days[0].DailyForecasts[0].Temperature.Maximum.Value}</h1>
          </div>
          <div className="col dayCard mx-3">
            <h2>{name5Days[1]}</h2>
            <h1>{data5Days[0].DailyForecasts[1].Temperature.Minimum.Value}</h1>
            <h1>{data5Days[0].DailyForecasts[1].Temperature.Maximum.Value}</h1>
          </div>
          <div className="col dayCard mx-3">
            <h2>{name5Days[2]}</h2>
            <h1>{data5Days[0].DailyForecasts[2].Temperature.Minimum.Value}</h1>
            <h1>{data5Days[0].DailyForecasts[2].Temperature.Maximum.Value}</h1>
          </div>
          <div className="col dayCard mx-3">
            <h2>{name5Days[3]}</h2>
            <h1>{data5Days[0].DailyForecasts[3].Temperature.Minimum.Value}</h1>
            <h1>{data5Days[0].DailyForecasts[3].Temperature.Maximum.Value}</h1>
          </div>
          <div className="col dayCard mx-3">
            <h2>{name5Days[4]}</h2>
            <h1>{data5Days[0].DailyForecasts[4].Temperature.Minimum.Value}</h1>
            <h1>{data5Days[0].DailyForecasts[4].Temperature.Maximum.Value}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
