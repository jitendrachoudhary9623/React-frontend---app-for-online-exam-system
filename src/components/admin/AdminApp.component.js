import React, { Component } from 'react';
import NavBar from '../NavBar.component'
import SideBar from './SideBar.component';
class AdminApp extends Component {

  render() {
    return (
      <div>
        <NavBar isLoggedIn={true}/>
        <div className="row">
          <div className="col s2" style={{ height: "87vh", backgroundColor: "white" }}>
            <SideBar />          </div>
          <div className="col s10">
            <div className="container">
              <div className="card p6">Welcome Admin
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminApp;