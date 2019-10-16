import React, { Component } from "react";
import NavBar from "../NavBar.component";
import axios from "axios";
import baseURL from "../../utils/API"
import SideBar from './SideBar.component';
import OptionInput from './OptionInput.component'

class UpdateComponent extends Component{

    
    constructor(props){
        super(props);
        //console.log(this.props.location.state);
        let state=this.props.location.state.question;
       // console.log("state",state);
        this.state=state;
    }
    handleOptionClick(optionNo) {
        let tempState = this.state;
        tempState.question.ans_option = parseInt(optionNo);
        this.setState(tempState);
    }

    handleTextBoxChange = (e) => {
        let tempState = this.state;
        tempState.question.question = e.target.value;
        this.setState(tempState);
        //console.log("update",this.state);

    }
    handleInputTextBox(optionNo, text) {
        let tempState = this.state;
        switch (parseInt(optionNo)) {
            case 1:
                tempState.question.op1 = text;
                break;
            case 2:
                tempState.question.op2 = text;
                break;
            case 3:
                tempState.question.op3 = text;
                break;
            case 4:
                tempState.question.op4 = text;
                break;
        }

        this.setState(tempState);

    }

    onSubmitHandler = () => {
        let add_url = baseURL+"/question/update"
        axios.put(add_url, this.state.question).then(
            (res) => {
                if (res.status == 200) {
                    alert(`Question Updated Successfully`);
                    this.props.history.push("/ViewQuestions");                    
                }
                else {
                    alert("Something went wrong");
                }
              //  console.log(res.data);
            }
        ).catch((err) => {
            alert("Something went wrong");
            //console.log(err);
        });
    }
    render(){
        //console.log(this.state);
        let optionNo = "";
        let text = "";
        return (
           <div>
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
                                            <textarea rows="50" id="textarea1" placeholder="Enter Question" onChange={this.handleTextBoxChange} value={this.state.question.question}></textarea>
                                        </div>
                                        <div style={{ margin: 20 }}>
                                            <div className="row">
                                                <OptionInput className="col s12" textInput={this.state.question.op1} optionNo="1" radioChecked={this.state.question.ans_option=="1"?true:false} handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                                <OptionInput className="col s12" textInput={this.state.question.op2} optionNo="2" radioChecked={this.state.question.ans_option=="2"?true:false} handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                            </div>
                                            <div className="row">
    
                                                <OptionInput className="col s12" textInput={this.state.question.op3} optionNo="3" radioChecked={this.state.question.ans_option=="3"?true:false} handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                                <OptionInput className="col s12" textInput={this.state.question.op4} optionNo="4" radioChecked={this.state.question.ans_option=="4"?true:false} handleOptionClick={(optionNo) => { this.handleOptionClick(optionNo) }} handleInputTextBox={(optionNo, optionText) => { this.handleInputTextBox(optionNo, optionText) }} />
                                            </div>
                                        </div>
                                        <div className="center-align">
                                            <input type="button" className="btn" value="Update Question" onClick={() => { this.onSubmitHandler() }} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    
    }
}

export default UpdateComponent;