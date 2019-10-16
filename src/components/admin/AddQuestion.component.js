import React, { Component } from 'react';
import SideBar from './SideBar.component';
import NavBar from '../NavBar.component'
import OptionInput from './OptionInput.component'
import axios from "axios";
import baseURL from "../../utils/API"

import addQuestionToDb from "../../utils/api_calls/addQuestion.api"
class AddQuestion extends Component {

    state = {
        "question": "",
        "op1": "",
        "op2": "",
        "op3": "",
        "op4": "",
        "ans_option": 1,
        "is_selected": 0

    }


    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    handleOptionClick(optionNo) {
        let tempState = this.state;
        tempState.ans_option = parseInt(optionNo);
        this.setState(tempState);
    }

    handleTextBoxChange = (e) => {
        let tempState = this.state;
        tempState.question = e.target.value;
        this.setState(tempState);
    }
    handleInputTextBox(optionNo, text) {
        let tempState = this.state;
        switch (parseInt(optionNo)) {
            case 1:
                tempState.op1 = text;
                break;
            case 2:
                tempState.op2 = text;
                break;
            case 3:
                tempState.op3 = text;
                break;
            case 4:
                tempState.op4 = text;
                break;
        }

        this.setState(tempState);

    }

    onSubmitHandler = () => {
       
        let add_url = baseURL+"/question/insert"
        axios.post(add_url, this.state).then(
            (res) => {
                if (res.status == 200) {
                    alert(`The Question is added Successfully`);
                    this.props.history.push("/ViewQuestions");                    

                }
                else {
                    alert("Something went wrong");
                }
                console.log(res.data);
            }
        ).catch((err) => {
            alert("Something went wrong");
            console.log(err);
        });
        
    }
    render() {
        let optionNo = "";
        let text = "";
        return (<div>
            <div>
                <NavBar isLoggedIn={true} />
                <div className="row">
                    <div className="col s2" style={{ height: "89vh", backgroundColor: "white" }}>
                        <SideBar />
                    </div>
                    <div className="col s10 scrollable">

                        <div className="row col s10 card" style={{ margin: 30 }}>

                            <form className="col s12">
                                <div className="row">
                                    <br />
                                    <div className="col s12">
                                        <label htmlFor="textarea1">Enter Question</label>
                                        <textarea rows="50" id="textarea1" placeholder="Enter Question" onChange={this.handleTextBoxChange} value={this.state.question}></textarea>
                                    </div>
                                    <div style={{ margin: 20 }}>
                                        <div className="row">
                                            <OptionInput className="col s12" optionNo="1" handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                            <OptionInput className="col s12" optionNo="2" handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                        </div>
                                        <div className="row">

                                            <OptionInput className="col s12" optionNo="3" handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                            <OptionInput className="col s12" optionNo="4" handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                        </div>
                                    </div>
                                    <div className="center-align">
                                        <input type="button" className="btn" value="Add Question" onClick={() => { this.onSubmitHandler() }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default AddQuestion;