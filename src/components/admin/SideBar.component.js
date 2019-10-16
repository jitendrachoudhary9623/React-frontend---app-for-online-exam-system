import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { updateLogin } from "../../actions/user.action"
import { withRouter } from 'react-router'


class SideBar extends Component {

  doUpdateLogin = () => {
    this.props.doUpdateLogin({ username: "", loggedIn: false });
  }
  render() {
    return (
      <ul>
        <li className="sidebar-item">
          <a href="#" id="questionBankTitleId" className="center-align">Question Bank</a>
          <ul>
            <li className="sidebar-sub-item">
              <Link to="/ViewQuestions" className="center-align">View Question</Link>

            </li>
            <li className="sidebar-sub-item">
              <Link to="/AddQuestion" className="center-align">Add Question</Link>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link to="/CreateQuestion" className="center-align">Create Test</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/AssignTest" className="center-align">Assign Test</Link>
        </li>
        <li className="sidebar-item">

          <Link to="/" className="center-align">Log out</Link>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.user.username,
    loggedIn: state.user.loggedIn
  };
}
const mapActionsToProps = {
  doUpdateLogin: updateLogin
}

export default connect(mapStateToProps, mapActionsToProps)(SideBar);
