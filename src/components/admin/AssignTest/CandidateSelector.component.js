import React, { Component } from 'react';
import axios from 'axios';
import baseURL from '../../../utils/API'
import LoaderComponent from "../../Loader.component"

class CandidateSelector extends Component {

    state = {
        selectedCandidates: new Set()
    }
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let dummy = {
            candidates: [{ name: "Jitendra" }, { name: "Rahul" }]
        }
        this.getAllCandidate();
        //this.setState(dummy);
        console.log("dummy", this.state);
    }

    getAllCandidate = () => {
        axios.get(`${baseURL}/candidate`)
            .then((response) => {
                // handle success
                console.log(response);
                this.setState({ candidates: response.data })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }

    assignTestToCandidates = () => {
        console.log({ id: this.state.selectedCandidates });
        const url = `${baseURL}/candidate/assignTest`;
        let array = Array.from(this.state.selectedCandidates);
        console.log(array);
        console.log("array", { "data": array });
        let tempState=this.state;
        tempState.candidates=null;
        this.setState(tempState);

        axios.post(url, { "data": array })
            .then((response) => {
                // handle success
                console.log(response);
                alert("Test assigned ", Array.from(this.state.selectedCandidates));
                this.getAllCandidate();
            })
            .catch(function (error) {
                // handle error
                alert(error);
                console.log(error);
            });
    }
    onCheckBoxSelect = (event, obj) => {
        let tempState = this.state;
        let id = obj;
        id.test_id = "100";
        if (tempState.selectedCandidates.includes(id)) {
            console.log("includes");
            tempState.selectedCandidates.remove(id);
        } else {
            console.log("added");
            tempState.selectedCandidates.push(id);
        }
        this.setState(tempState);
        console.log(this.state);
    }
    render() {
        { console.log(this.state) }
        if (this.state.candidates == null) {
            return (<LoaderComponent />)
        } else {
            return (

                <div className="card">
                    <br />

                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">Total Candidates : &nbsp;&nbsp;{this.state.candidates.length}</div></div>

                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4 btn" onClick={this.assignTestToCandidates}>
                            Assign Test</div>

                    </div>

                    <table className="centered striped" >
                        <thead style={{ fontSize: "120%" }}>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Assign</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.candidates.map((item, index) => (
                                <tr key={item.candidateId}>
                                    <td>
                                        {item.candidateId}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        <label>
                                            <input type="checkbox"
                                                onClick={(event) => {
                                                    let tempState = this.state;
                                                    let id = {
                                                        candidateId: 0,
                                                        email: "",
                                                        password: ""
                                                    };
                                                    console.log(item);
                                                    id.candidateId = item.candidateId;
                                                    id.email=item.email;
                                                    id.email_id = item.email;
                                                    id.password = item.password;
                                                    if (tempState.selectedCandidates.has(id)) {
                                                        console.log("includes");
                                                        tempState.selectedCandidates.delete(id);
                                                    } else {
                                                        console.log("added");
                                                        tempState.selectedCandidates.add(id);
                                                    }
                                                    this.setState(tempState);
                                                    console.log(this.state);
                                                    console.log(item.candidateId)
                                                }}
                                                className="filled-in"
                                            />
                                            <span></span></label>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            );
        }
    }

}

export default CandidateSelector;