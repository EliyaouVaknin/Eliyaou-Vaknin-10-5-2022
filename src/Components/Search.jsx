import React, { useState } from 'react'
import '../Styles/Search.css'

export default function Search(props) {

  const onCitySearch = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    props.getCityKey(form['cityName'].value);
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(event) => onCitySearch(event)} className="input-group mb-3">
          <input name='cityName' type="text" className="form-control" placeholder="Enter Place" aria-label="Enter Place" aria-describedby="Enter Place"></input>
          <button id="SearchBtn" className="input-group-text p-1 btn btn-primary">Search Place</button>
        </form>
      </div>
    </div>
  )
}
