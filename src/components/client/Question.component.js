import React, { Component } from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
    }

    handleAnswerLayoutChange(answerNo) {
        this.props.handleAnswerClick(this.props.item.id, answerNo);
    }
    render() {
        return (
            <ul key={this.props.id} className="card questionBody" >
                <li className="card-content">
                    {this.props.item.id} . {this.props.item.Question}
                </li>
                <li>
                    {this.props.item.Answers.map((ans, index) => (
                        
                        <ul className="card-action" key={'' + this.props.item.id + index + 1}>
                            <li onClick={this.handleAnswerLayoutChange.bind(this, index + 1)}>
                                <div className={ans.marked === true ? "btn blue darken-1" : "btn blue-grey darken-5"}>
                                    {index + 1} . {ans.option}
                                </div>
                            </li>
                        </ul>
                    ))}
                </li>
            </ul>
        );
    }
}

export default Question;
