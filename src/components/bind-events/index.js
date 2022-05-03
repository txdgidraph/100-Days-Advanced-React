import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    //     console.log(this)
    // }

    clickHandler = () =>{
        this.setState({
            message:"Goodbye"
        })
        console.log(this)
    }
  render() {
    return (
      <div>
          <h1>
              Event Binding in React
          </h1>
          {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
          {/* <button onClick={()=>{this.clickHandler()}}>Click Me</button> */}
          {/* <button onClick={this.clickHandler}>Click Me</button> */}
          <button onClick={this.clickHandler}>Click Me</button>
          <h2>{this.state.message}</h2>
      </div>
    )
  }
}

export default EventBinding;