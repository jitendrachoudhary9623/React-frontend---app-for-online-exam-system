import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from 'react-router-dom';

export default class ScoreCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row col s12 card card-content center-align">
                <span className="card-title">Your Score for this test is</span>
                <h3>{this.props.score}</h3>
                <Link to="/"  className="center-align btn">Log out</Link>
                <br/>
                <br/>
            </div>
        );
    }
}

