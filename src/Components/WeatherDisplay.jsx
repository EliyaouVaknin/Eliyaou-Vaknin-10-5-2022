import React, { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../Styles/WeatherDisplay.css'
import DayNightTmp from './DayNightTmp';

export default function WeatherDisplay({ currentData, name5Days, data5Days, cityName, favoritesFunc, isFavorites }) {

  const [isFav, setIsFav] = useState(isFavorites(cityName))

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <>
      {data5Days &&
        <div className="container-fluid">
          <div className="row flex justify-content-around">
            <div className=" ThisWeatherCard card col-md-12">
              <div className="card-body d-flex flex-row justify-content-between align-items-center">
                <div id='leftSideCard'>
                  <div className="row">
                    <h3>{cityName}</h3>
                  </div>
                  <h1>{currentData[0].Temperature.Metric.Value}&#8451;</h1>
                </div>
                <div id='MiddleSideCard'>
                  <h2>{currentData[0].WeatherText}</h2>
                </div>
                <div id='RightSideCard'>
                  <input id="AddToFavoritesCheckBox" className='invisible' checked={isFav} type="checkbox" />
                  <label for="AddToFavoritesCheckBox" className='h1' onClick={() => { favoritesFunc(!(isFav)); setIsFav(!isFav) }} style={{ opacity: (isFav) ? 1 : 0.5 }}>&#10084;</label>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-3">
            <div className="row">
              {data5Days.DailyForecasts.map((dataDayNight, i) => {
                return <DayNightTmp dataDayNight={dataDayNight} DayName={name5Days[i]} />
              })}
            </div>
          </div>

          <div className="container-fluid">
            <div className="flex row justify-content-between">
              <div className="chartDiv col-md-5">
                <Line data={{
                  labels: [name5Days[0], name5Days[1], name5Days[2], name5Days[3], name5Days[4], name5Days[5]],
                  datasets: [
                    {
                      label: "Minimum Temperature",
                      data: [(data5Days.DailyForecasts[0].Temperature.Minimum.Value - 32) * (5 / 9),
                      (data5Days.DailyForecasts[1].Temperature.Minimum.Value - 32) * (5 / 9),
                      (data5Days.DailyForecasts[2].Temperature.Minimum.Value - 32) * (5 / 9),
                      (data5Days.DailyForecasts[3].Temperature.Minimum.Value - 32) * (5 / 9),
                      (data5Days.DailyForecasts[4].Temperature.Minimum.Value - 32) * (5 / 9)],
                      fill: true,
                      backgroundColor: "rgba(75,192,192,0.2)",
                      borderColor: "rgba(75,192,192,1)"
                    }
                  ]
                }} />
              </div>
              <div className="chartDiv col-md-5 " >
                <Line data={
                  {
                    labels: [name5Days[0], name5Days[1], name5Days[2], name5Days[3], name5Days[4], name5Days[5]],
                    datasets: [
                      {
                        label: "Maximum Temperature",
                        data: [(data5Days.DailyForecasts[0].Temperature.Maximum.Value - 32) * (5 / 9),
                        (data5Days.DailyForecasts[1].Temperature.Maximum.Value - 32) * (5 / 9),
                        (data5Days.DailyForecasts[2].Temperature.Maximum.Value - 32) * (5 / 9),
                        (data5Days.DailyForecasts[3].Temperature.Maximum.Value - 32) * (5 / 9),
                        (data5Days.DailyForecasts[4].Temperature.Maximum.Value - 32) * (5 / 9)],
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                      }
                    ]
                  }
                } />
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}
