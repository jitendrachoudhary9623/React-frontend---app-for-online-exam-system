import React, { Component } from "react";
import spinner from "../../public/Processing2.gif"
class LoaderComponent extends Component {

    render() {
        return (<div className="row card" style={{ margin: "2%", padding: "5%", width: "95vw", height: "50vh" }}>
            <div align="center">
            <h5>{this.props.errorMessage}</h5>

                <img style={{ width: "10%" }} src={spinner} />
               
            </div>
        </div>);
    }
}
LoaderComponent.defaultProps = {
    errorMessage: "Loading data, please wait"
}

export default LoaderComponent;
