import React, { Component } from "react";

class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <>
        <h1>Time:</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}

export default Clock;
