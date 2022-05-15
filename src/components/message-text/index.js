import React, { Component } from "react";

class MessageText extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribe",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me!</button>
      </div>
    );
  }
}
export default MessageText;
