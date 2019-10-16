import React, { Component } from "react";
import Button from "./button.component";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const axios = require("axios");

class QuestionsTable extends Component {
  state = {
    questionSet: this.props.dataList
  };
  getCorrectAnswer = (question) => {

    let ans_option = question.ans_option;
    switch (ans_option) {
      case 1:
        return question.op1;
      case 2:
        return question.op2;
      case 3:
        return question.op3;
      case 4:
        return question.op4;
    }

  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div>
            <table className="centered striped">
              <thead style={{ fontSize: "120%" }}>
                <tr>
                  <th>QID</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.questionSet.map((question, index) => (
                  <tr key={question.id}>
                    <td>{question.id}</td>
                    <td style={{ textAlign: "left" }}>{question.question}</td>

                    <td>{this.getCorrectAnswer(question)}</td>
                    <td>
                      <Link to={{
                        pathname: '/updateQuestion',
                        state: {
                          question: { question }
                        }
                      }} className="btn">Update</Link>
                      </td><td>
                      <Button Question={question} onClick={this.handleClick} />
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  handleClick = ques => {

    this.setState({
      questionSet: this.state.questionSet.filter(
        question => question.id !== ques.id
      )
    });


    this.props.onRemoveQ(ques);
  };
}

export default QuestionsTable;
