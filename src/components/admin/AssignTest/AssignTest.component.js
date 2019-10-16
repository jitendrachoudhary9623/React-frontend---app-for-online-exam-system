import React, { Component } from 'react';
import SideBar from '../SideBar.component';
import NavBar from '../../NavBar.component';
import CandidateSelector from "./CandidateSelector.component";
import axios from "axios";
import baseURL from "../../../utils/API";
class AssignTest extends Component {

    state = {
        emailId: "",
        reload:0
    }
    handleChange = (e) => {
        console.log(e.target.value);
        let tempstate = this.state;
        tempstate.emailId = e.target.value;
        this.setState(tempstate);
    }

    addCandidate = () => {
        console.log("add candidate", this.state.emailId,`${baseURL}/candidate/addCandidate`);
        axios.post(`${baseURL}/candidate/addCandidate`, { email: this.state.emailId })
            .then((response) => {
                console.log("axios ", response);
                if(response.status==200){
                    alert("Candidate added to the list");
                    this.props.history.push("/");
                    this.props.history.push("/AssignTest");
                }
                else{
                    alert("Something went wrong");
                }
            })
            .catch(function (error) {
                console.log("err",error);
            });
           
    }
    render() {

        return (
            <div>
                <NavBar isLoggedIn={true} />
                <div className="row">
                    <div className="col s2" style={{ height: "87vh", backgroundColor: "white" }}>
                        <SideBar />          </div>
                    <div className="col s10 scrollable">
                        <div className="container ">

                            <div className="row">
                                <div className="col s12">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className="card-title">Add New Candidate</span>
                                            <p>Enter Candidate's Email Id to add them to the system</p>
                                            <br />
                                            <div className="row">
                                                <div className="input-field col s8">
                                                    <input placeholder="Enter Email Id" id="first_name" type="text" className="validate" onChange={this.handleChange} value={this.state.emailId} />
                                                    <label htmlFor="first_name">Enter Email Id</label>
                                                </div>
                                                <div>
                                                    <br />
                                                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.addCandidate}>Add Candidate
                                                        <i className="material-icons right">send</i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            <div className="row">
                               
                                <CandidateSelector reload= {this.state.reload} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AssignTest;