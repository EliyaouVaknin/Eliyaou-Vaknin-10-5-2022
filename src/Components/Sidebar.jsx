import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css'

export default function Sidebar() {
  return (
    <div id='SidebarDiv' className="container-fluid py-4">
      <img width={'100%'} height={'8%'} src={require('../Img/abra-logo.webp')}></img>
      <div className="row py-3">
        <div className="navbar-nav" id="wrapper">
          <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
            <Link to={'/'} className="list-group-item list-group-item-action list-group-item-light p-3">Home</Link>
            <Link to={'/favorites'} className='list-group-item list-group-item-action list-group-item-light p-3'>Favorites</Link>
            <Link to={'/contact'} className='list-group-item list-group-item-action list-group-item-light p-3'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
