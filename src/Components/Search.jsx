import React from 'react'
import '../Styles/Search.css'

export default function Search() {
  return (
    <div className="container">
      <div className="row">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Enter Place" aria-label="Enter Place" aria-describedby="Enter Place"></input>
            <span id="SearchBtn" class="input-group-text p-1 btn btn-primary">Search Place</span>
        </div>
      </div>
    </div>
  )
}
