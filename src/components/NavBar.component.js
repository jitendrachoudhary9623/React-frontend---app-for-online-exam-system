import React, { Component } from 'react';

import { connect } from "react-redux";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   // console.log("navba ", this.props)
    return (<div className="grey navbar-fixed ">
      <nav>
        <div className="nav-wrapper">
          <span id="navBarTitle" className="brand-logo pad-2 left blue-text text-darken-2" style={{ marginLeft: 30 }}>{this.props.title}</span>
          <ul className="right" style={{ marginRight: 30 }}>
            {(this.props.loggedIn) ? <li>Welcome {this.props.username}</li> : <li></li>}
          </ul>
        </div>
      </nav>
    </div>
    )
  }
}

NavBar.defaultProps = {
  title: "Genesis",
  username: "user",
  isLoggedIn: true
}

//provides the state
const mapStateToProps = state => {
  return{
    username: state.user.username,
    loggedIn: state.user.loggedIn
  };
}

export default connect(mapStateToProps)(NavBar);