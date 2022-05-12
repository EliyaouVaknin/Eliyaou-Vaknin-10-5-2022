import React from 'react'

export default function DayNightTmp({dataDayNight,DayName}) {
    return (
        <div className="col dayCard mx-3" >
            <h3>{DayName}</h3>
            <div className="row">
                <h1 className='col-md-6'>{Math.floor((dataDayNight.Temperature.Minimum.Value - 32) * (5 / 9))}</h1>
                <h1 className='col-md-6'>{Math.floor((dataDayNight.Temperature.Maximum.Value - 32) * (5 / 9))}</h1>
            </div>
        </div>
    )
}
