import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id='HeaderDiv'>
      <div className="row">
        <div className='col-md-1'>
          <img src={require('../Img/userImg.png')}></img>
        </div>
        <div className="col-md-9 py-3">
          <h3 className='text-start'>Wellcome,
            <br />
            Abra Web and Mobile</h3>
        </div>
        <div className="col-md-2 py-3">
          <Link to={'/'} className='btn btn-primary'>Search</Link>
          <Link to={'/favorites'} className='btn btn-primary mx-2'>Favorites</Link>
        </div>
      </div>
    </div>
  )
}
