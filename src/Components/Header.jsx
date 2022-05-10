import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id='HeaderDiv'>
      <div className="row">
        <div className="col-md-10">
          <h3 className='text-start'>Wellcome, Abra Web and Mobile</h3>
        </div>
        <div className="col-md-2">
          <Link to={'/'} className='btn btn-primary'>Search</Link>
          <Link to={'/favorites'} className='btn btn-primary mx-2'>Favorites</Link>
        </div>
      </div>
    </div>
  )
}
