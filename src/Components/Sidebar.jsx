import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart, faContactBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css'

export default function Sidebar() {
  return (
    <div id='SidebarDiv' className="container py-4 w-auto">
      <img width={'100%'} height={'8%'} src={require('../Img/abra-logo.webp')}></img>
      <div className="row py-3">
        <div className="navbar-nav" id="wrapper">
          <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
            <Link to={'/'} className="list-group-item list-group-item-action list-group-item-light p-3"><FontAwesomeIcon icon={faHome}/> Home</Link>
            <Link to={'/favorites'} className='list-group-item list-group-item-action list-group-item-light p-3'><FontAwesomeIcon icon={faHeart}/> Favorites</Link>
            <Link to={'/contact'} className='list-group-item list-group-item-action list-group-item-light p-3'><FontAwesomeIcon icon={faContactBook}/> Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
