import React, { Component } from 'react';
import QuestionPaper from './QuestionPaper.component'
import NavBar from '../NavBar.component'
import ScoreCard from './ScoreCard.component'
import dataSource from '../../datasource/mockData'
import axios from "axios";
import baseURL from "../../utils/API"
import LoaderComponent from "../Loader.component"
import spinner from '../../../public/Processing2.gif';

class Quiz extends Component {
  state = {
    data: dataSource,
    score: "",
    userType: "",
    dataFetched: false
  }
  constructor(props) {
    super(props);
    let getAll = baseURL + "/question/";
    console.log(getAll);
    axios.get(getAll, this.state).then(
      (res) => {
        if (res.status == 200) {
          let datasource = [];
          console.log(res);
          let questionNo=1;
          for (var counter = 0; counter < res.data.length; counter++) {
            let dataModel = new Object();
            if(res.data[counter].isselected==1){
              dataModel.Question = res.data[counter].question;
              dataModel.actualAnswer = "" + res.data[counter].ans_option;
              dataModel.id = questionNo;
              dataModel.userAnswer = "";
              dataModel.type = "objective";
              let Answers = [];
              Answers.push({ "option": res.data[counter].op1, marked: false });
              Answers.push({ "option": res.data[counter].op2, marked: false });
              Answers.push({ "option": res.data[counter].op3, marked: false });
              Answers.push({ "option": res.data[counter].op4, marked: false });
              dataModel.Answers = Answers;
              datasource.push(dataModel);
              questionNo++;

            }
          }
          let tempState = this.state;
          tempState.data = datasource;
          tempState.dataFetched = true;
          this.setState(tempState);
        }
        else {
          alert("Something went wrong");
        }
      }
    ).catch((err) => {
      alert("Something went wrong err", err);
      console.log(err);
    });
    this.completeTestHandler = this.completeTestHandler.bind(this);

  }

  componentDidMount() {

  }
  completeTestHandler(score) {
    this.setState({ data: "", score: score })
  }
  render() {
    if (this.state.score === "") {
      if (this.state.dataFetched) {
        return (
          <div>
            <NavBar isLoggedIn={true} />
            <QuestionPaper questions={this.state} seconds={300} completeTestHandler={this.completeTestHandler} />
          </div>
        );
      } else {
        return (<LoaderComponent/>);
      }
    } else {
      return (
        <div>
          <NavBar isLoggedIn={true} />
          <ScoreCard score={this.state.score} style={{ margin: 3 }} />
        </div>
      );
    }
  }
}

export default Quiz;