import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Search.css'

export default function Search({ getCityKey, forcastKey, setCityInput }) {
    var autocompleteBaseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const [input, setInput] = useState('');
    const [autocompleteList, setAutocompleteList] = useState();

    const searchForAutocompleteAndUpdateName = async () => {
        var autocompleteBaseQuery = `?apikey=${forcastKey}&q=${input}`
        await fetch(autocompleteBaseUrl + autocompleteBaseQuery)
            .then(res => res.json())
            .then(res => setAutocompleteList(res))
    }

    const onCitySearch = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        getCityKey(form['cityName'].value);
    }

    return (
        <div className="search-box">
            <form onSubmit={(event) => onCitySearch(event)}>
                <div>
                    <button className="btn-search"><FontAwesomeIcon icon={faSearch} /></button>
                    <input id='cityName' name='cityName' type="text" onBlur={() => setInput('')} onChange={(e) => { setInput(e.target.value); searchForAutocompleteAndUpdateName() }} className="input-search" placeholder="Type to Search..."></input>
                    <div className='position-relative'>
                        <ul className='card w-100 position-absolute' style={{zIndex: 1}}>
                            {autocompleteList && input != '' && autocompleteList.map((place) => {
                                return <li>{place.LocalizedName}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </form >
        </div>
    )
}
