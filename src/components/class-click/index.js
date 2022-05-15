import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         time:12,
      }
    }
    handleClick(){
       console.log("button clicked")
    }
    
  render() {
    return (
      <div>
          <h1>Event Handling in Class Components</h1>
          <button onClick={this.handleClick}>Click Me</button>
          <br />
          <h2>Time : {this.state.time}</h2>
      </div>
    )
  }
}

export default ClassClick;