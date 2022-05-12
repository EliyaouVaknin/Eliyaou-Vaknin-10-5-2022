import React from 'react'
import '../Styles/Favorites.css'

export default function Favorites({favoritesList}) {
  return (
    <div className="container-fluid">
      <div className="row">
        {favoritesList.map((f) => {
          return (
            <div className="favoriteCard card col-md-3 mb-2">
            <button type="button" class="btn btn-danger mt-3 col-md-4">Remove</button>
            <h2>{f.favoritekeyNumber}</h2>
            <h2>{f.favoriteCityName}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}
