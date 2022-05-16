import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom';

export default function Header({getCityKey,forcastKey}) {
  return (
    <div id='HeaderDiv'>
      <div className="row">
        <div className='col-md-1'>
          <img src={require('../Img/userImg.png')}></img>
        </div>
        <div className="col-md-7 py-3">
          <h3 className='text-start'>Wellcome,
            <br />
            Abra Web and Mobile</h3>
        </div>
        <div className="col-md-4 py-3">
        <Search getCityKey = {getCityKey} forcastKey={forcastKey} />
        </div>
      </div>
    </div>
  )
}
