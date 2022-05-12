import React from 'react'
import '../Styles/DayNightTmp.css'

export default function DayNightTmp({dataDayNight,DayName}) {
    return (
        <div className="col dayCard mx-3" >
            <h3 className="dayNightParam">{DayName}</h3>
            <div className="row">
                <h1 className='dayNightParam col-md-6'>{Math.floor((dataDayNight.Temperature.Minimum.Value - 32) * (5 / 9))}</h1>
                <h1 className='dayNightParam col-md-6'>{Math.floor((dataDayNight.Temperature.Maximum.Value - 32) * (5 / 9))}</h1>
            </div>
        </div>
    )
}
