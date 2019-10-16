import React, { Component } from "react";
import NavBar from "../NavBar.component";
import QuestionsTable from "./questions-table.component";
import SideBar from './SideBar.component';
import baseURL from "../../utils/API"
import UpdateQuestion from "../admin/UpdateQuestion.component"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoaderComponent from "../Loader.component"
const axios = require("axios");

class DeleteQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionSet: null
    };
  }

  UNSAFE_componentWillMount() {
    
    this.getAllQuestions();
  }

  getAllQuestions() {
    axios
      .get(`${baseURL}/question`)
      .then(response => {
        
        this.setState({ questionSet: response.data });
     
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
     
  }

  render() {
    if (this.state.questionSet == null) {
      return (<LoaderComponent/>);
    }
    return (
      <div >
      <NavBar isLoggedIn={true} />
      <div className="row">
                    <div className="col s2" style={{ height: "89vh", backgroundColor: "white" }}>
                        <SideBar />
                    </div>
                    <div className="col s10 scrollable">
        
            <h6 className="center">View Questions:</h6>
            <QuestionsTable
              dataList={this.state.questionSet}
              onRemoveQ={this.removeQuestionId}
            />
          </div>
          <div className={"col m1"}></div>
        </div>
      </div>
    );
  }

  removeQuestionId = ques => {

    this.setState({
      questionSet: this.state.questionSet.filter(
        question => question.id !== ques.id
      )
    });

    // let reqData = {
    //   data: this.state.questionSet
    // };
    axios
      .delete(`${baseURL}/question/delete/${parseInt(ques.id)}`)
      .then(res => {
        console.log(res);
        console.log(ques.id);
      });
  };
}

export default DeleteQuestion;
