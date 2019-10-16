import React, { Component } from "react";

export default class SubmitButton extends Component {

    render() {
        return (
            <div className="row">
                <button onClick={this.props.timerUpHandler} className="col s12 m-2 center-align btn waves-effect waves-light blue darken-1 buttonStyle" type="submit" name="action">Submit Test
                    <i className="material-icons right"></i>
                </button>
            </div>
        )
    }
}