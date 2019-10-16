import React, { Component } from 'react';
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: {}, seconds: this.props.seconds, isOpen: false };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.startTimer();
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        let tempState = this.state;
        tempState.time = this.secondsToTime(seconds);
        tempState.seconds = seconds;
        this.setState({
            tempState
        });
        if (seconds === 0) {
            clearInterval(this.timer);
            this.props.timerUpHandler();
        }
    }
    
    render() {
        return (
            <div className="row card ">
                <a className="col s12 card-content horizontal center-align" style={{ padding: 5, fontSize: 25 }}>
                    {this.state.time.m} : {this.state.time.s}
                </a>
            </div>
        )
    }

}

Timer.defaultProps = {
    seconds: 60
};

export default Timer;