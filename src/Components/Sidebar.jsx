import React from 'react'
import '../Styles/Sidebar.css'

export default function Sidebar() {
  return (
    <div id='SidebarDiv' class="container-fluid">
      <h3>Side Bar</h3>
      <div class="row">
        <div class="navbar-nav" id="wrapper">
          <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
              <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
              <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
              <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
              <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
              <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
              <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
