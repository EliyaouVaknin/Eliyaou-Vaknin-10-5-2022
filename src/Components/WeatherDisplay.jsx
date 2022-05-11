import React from 'react'
import '../Styles/WeatherDisplay.css'

export default function WeatherDisplay({currentData}) {
  console.log(currentData);
  return (
    <div className="container">
      <div className="row">
        {/* need to fix card position without div col */}
        <div className="col-md-1"></div> 
        <div id='ThisWeatherCard' className="card col-md-11">
          <div className="card-body">
            <h4 className='col-md-11'>Weather</h4>
            <p className='col-md-11'>Beer Sheva</p>
            <h1>{currentData[0][0].Temperature.Metric.Value}C</h1>
            <h3>{currentData[0][0].WeatherText}</h3>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h2>Sunday</h2>
                  <h1>21C</h1>
                </div>
                <div className="col">
                  <h2>Sunday</h2>
                  <h1>21C</h1>
                </div>
                <div className="col">
                  <h2>Sunday</h2>
                  <h1>21C</h1>
                </div>
                <div className="col">
                  <h2>Sunday</h2>
                  <h1>21C</h1>
                </div>
                <div className="col">
                  <h2>Sunday</h2>
                  <h1>21C</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
