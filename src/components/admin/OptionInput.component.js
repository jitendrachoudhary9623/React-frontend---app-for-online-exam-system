import React, { Component } from 'react';

class OptionInput extends Component {


    constructor(props) {
        super(props);
        this.state = {
            optionText: this.props.textInput,
            radioChecked: this.props.radioChecked
        }
    }

    handleOptionChange = () => {
        let tempState = this.state;
        tempState.radioChecked = !this.state.radioChecked;
        this.setState(tempState);
        console.log("changer");
        this.props.handleOptionClick(this.props.optionNo);
    }
    handleTextChange = (e) => {
        let tempState = this.state;
        tempState.optionText = e.target.value;
        this.setState(tempState);
        this.props.handleInputTextBox(this.props.optionNo, this.state.optionText);
    }
    render() {
        return (
            <div className="row">
                <div className="col s5">
                    <label htmlFor="option">Option {this.props.optionNo}</label>
                    <input id="option" type="text" placeholder={`Enter Option ${this.props.optionNo}`} onChange={this.handleTextChange} value={this.state.optionText} ></input>
                </div>
                <div className="col s1">
                    <label>is Answer</label><br />
                    <label>
                        <input type="radio" className="with-gap" name="radio" onChange={this.handleOptionChange} checked={this.state.radioChecked} />
                        <span></span>
                    </label></div>
            </div>
        )
    }
}

OptionInput.defaultProps = {
    textInput: "",
    radioChecked: false
}
export default OptionInput;