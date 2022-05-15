import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Search.css'

export default function Search({ getCityKey, forcastKey, setCityInput }) {
    var autocompleteBaseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const [input, setInput] = useState('');
    const [autocompleteList, setAutocompleteList] = useState(
        [
            {
                "Version": 1,
                "Key": "215752",
                "Type": "City",
                "Rank": 41,
                "LocalizedName": "Beersheba",
                "Country": {
                    "ID": "IL",
                    "LocalizedName": "Israel"
                },
                "AdministrativeArea": {
                    "ID": "D",
                    "LocalizedName": "Southern District"
                }
            },
            {
                "Version": 1,
                "Key": "31476",
                "Type": "City",
                "Rank": 63,
                "LocalizedName": "Beersel",
                "Country": {
                    "ID": "BE",
                    "LocalizedName": "Belgium"
                },
                "AdministrativeArea": {
                    "ID": "VBR",
                    "LocalizedName": "Flemish Brabant"
                }
            },
            {
                "Version": 1,
                "Key": "31822",
                "Type": "City",
                "Rank": 63,
                "LocalizedName": "Beernem",
                "Country": {
                    "ID": "BE",
                    "LocalizedName": "Belgium"
                },
                "AdministrativeArea": {
                    "ID": "VWV",
                    "LocalizedName": "West Flanders"
                }
            },
            {
                "Version": 1,
                "Key": "173266",
                "Type": "City",
                "Rank": 63,
                "LocalizedName": "Beelitz",
                "Country": {
                    "ID": "DE",
                    "LocalizedName": "Germany"
                },
                "AdministrativeArea": {
                    "ID": "BB",
                    "LocalizedName": "Brandenburg"
                }
            },
            {
                "Version": 1,
                "Key": "964727",
                "Type": "City",
                "Rank": 65,
                "LocalizedName": "Beerse",
                "Country": {
                    "ID": "BE",
                    "LocalizedName": "Belgium"
                },
                "AdministrativeArea": {
                    "ID": "VAN",
                    "LocalizedName": "Antwerp"
                }
            },
            {
                "Version": 1,
                "Key": "170086",
                "Type": "City",
                "Rank": 65,
                "LocalizedName": "Beeck",
                "Country": {
                    "ID": "DE",
                    "LocalizedName": "Germany"
                },
                "AdministrativeArea": {
                    "ID": "NW",
                    "LocalizedName": "North Rhine-Westphalia"
                }
            },
            {
                "Version": 1,
                "Key": "3074112",
                "Type": "City",
                "Rank": 65,
                "LocalizedName": "Beejoliya Kalan",
                "Country": {
                    "ID": "IN",
                    "LocalizedName": "India"
                },
                "AdministrativeArea": {
                    "ID": "RJ",
                    "LocalizedName": "Rajasthan"
                }
            },
            {
                "Version": 1,
                "Key": "300862",
                "Type": "City",
                "Rank": 65,
                "LocalizedName": "Beer",
                "Country": {
                    "ID": "SO",
                    "LocalizedName": "Somalia"
                },
                "AdministrativeArea": {
                    "ID": "TO",
                    "LocalizedName": "Togdheer"
                }
            },
            {
                "Version": 1,
                "Key": "2109297",
                "Type": "City",
                "Rank": 65,
                "LocalizedName": "Beech Grove",
                "Country": {
                    "ID": "US",
                    "LocalizedName": "United States"
                },
                "AdministrativeArea": {
                    "ID": "IN",
                    "LocalizedName": "Indiana"
                }
            },
            {
                "Version": 1,
                "Key": "2225627",
                "Type": "City",
                "Rank": 65,
                "LocalizedName": "Beecher",
                "Country": {
                    "ID": "US",
                    "LocalizedName": "United States"
                },
                "AdministrativeArea": {
                    "ID": "MI",
                    "LocalizedName": "Michigan"
                }
            }
        ]);

    const searchForAutocompleteAndUpdateName = async () => {
        var autocompleteBaseQuery = `?apikey=${forcastKey}&q=${input}`
        // await fetch(autocompleteBaseUrl + autocompleteBaseQuery)
        // .then(res =>res.json())
        // .then(res => setAutocompleteList(res))
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
                    <input id='cityName' name='cityName' type="text" onChange={(e) => { setInput(e.target.value); searchForAutocompleteAndUpdateName() }} className="input-search" placeholder="Type to Search..."></input>
                </div>
            </form >
            <div>
            </div>
        </div>
    )
}
