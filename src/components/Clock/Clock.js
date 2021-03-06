import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div className="ClockBox">
                <h2>{this.getDate}</h2>
                <h2 className="Clock">
                    {this.state.date.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </h2>
            </div>
        );
    }
}
