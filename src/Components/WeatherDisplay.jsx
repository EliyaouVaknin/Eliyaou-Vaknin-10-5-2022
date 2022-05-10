import React from 'react'
import '../Styles/WeatherDisplay.css'

export default function WeatherDisplay() {
  return (
    <div className="container">
      <div className="row">
        {/* need to fix card position without div col */}
        <div className="col-md-1"></div> 
        <div id='ThisWeatherCard' className="card col-md-11 rounded">
          <div class="card-body">
            <h4 className='col-md-11'>Weather</h4>
            <p className='col-md-11'>Beer Sheva</p>
            <h1>22C</h1>
            <h3>Partly Cloudy</h3>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h2>City1</h2>
                </div>
                <div className="col">
                  <h2>City2</h2>
                </div>
                <div className="col">
                  <h2>City3</h2>
                </div>
                <div className="col">
                  <h2>City4</h2>
                </div>
                <div className="col">
                  <h2>City5</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
