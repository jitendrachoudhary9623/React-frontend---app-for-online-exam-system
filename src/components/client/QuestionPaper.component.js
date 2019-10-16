import React, { Component } from 'react';
import Timer from "./Timer.component"
import SubmitButton from "./SubmitButton.component";
import Question from './Question.component';
class QuestionPaper extends Component {
    constructor(props) {
        super(props);
        this.state = {"questions":this.props.questions.data,"currentQuestion":0};
        this.timerUpHandler = this.timerUpHandler.bind(this);
        this.score = 0;
        this.currentQuestion=0;
    }
   
    timerUpHandler() {
        let paper = this.state;
        let score = 0;
        paper.questions.map(item => {
            if (item.userAnswer == item.actualAnswer) {
                score++;
            }
        });
        this.score = score;
        this.props.completeTestHandler(score);
    }

    handleAnswerClick = (id, answer) => {
        let questionState = this.state;
        console.log(questionState.questions[id - 1]);
        questionState.questions[id - 1].userAnswer = "" + answer;
        for (var counter = 0; counter < questionState.questions[id - 1].Answers.length; counter++) {
            if ('' + (counter + 1) === questionState.questions[id - 1].userAnswer) {
                questionState.questions[id - 1].Answers[counter].marked = true;
            }
            else {
                questionState.questions[id - 1].Answers[counter].marked = false;
            }
        }
        this.setState({ questionState });
        console.log(this.state);
    }

    nextButtonHandler(){
        let tempState=this.state;
        if(tempState.questions.length-1>this.currentQuestion){
            this.currentQuestion++;
            this.setState({tempState});
        }

    }

    previousButtonHandler=()=>{
        if(this.currentQuestion>0){
            this.currentQuestion--;
            let tempState=this.state;
            this.setState(tempState);
        }
    }
    render() {

        return (<div className="row">
            <div className="col s8">
                <Question key={'b' + this.state.questions[this.currentQuestion].id} item={this.state.questions[this.currentQuestion]} id={'a' + this.state.questions[this.currentQuestion].id} handleAnswerClick={this.handleAnswerClick}/>
            </div>
            <div className="col s3 navigationStyle">
            <Timer seconds={this.props.seconds} timerUpHandler={this.timerUpHandler} />
            <button onClick={this.nextButtonHandler.bind(this)} className="row col s12 btn grey lighten-5 buttonStyle" style={{color:"black"}}>Next </button>
            <button onClick={this.previousButtonHandler.bind(this)} className="row col s12 btn grey lighten-5 buttonStyle" style={{color:"black"}}>Previous </button>
            <SubmitButton timerUpHandler={this.timerUpHandler} />

            </div>
           

        </div>);
    }

};

export default QuestionPaper;