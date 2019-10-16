import React, { Component } from 'react';
import SideBar from './SideBar.component';
import NavBar from '../NavBar.component'

class ViewQuestions extends Component {

    render() {
        return (
                <div>
                    <NavBar/>
                    <div className="row">
                        <div className="col s2" style={{ height: "87vh", backgroundColor: "white" }}>
                            <SideBar />
                        </div>
                        <div className="col s10 scrollable">
                            <div className="container">
                                <div className="card p6">View Questions</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default ViewQuestions;