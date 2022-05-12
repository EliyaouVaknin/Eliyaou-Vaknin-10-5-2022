import React from 'react'
import '../Styles/Sidebar.css'

export default function Sidebar() {
  return (
    <div id='SidebarDiv' className="container-fluid py-4">
      <img width={'100%'} height={'8%'} src={require('../Img/abra-logo.webp')}></img>
      <div className="row py-3">
        <div className="navbar-nav" id="wrapper">
          <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
