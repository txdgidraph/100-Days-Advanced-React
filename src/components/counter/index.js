import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0, 
      }
    }
    incrementCount(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>{console.log(this.state.count)})
        
        this.setState((prevState) =>({
            count: prevState.count + 1
        }))
    }

    incrementFive(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }
  render() {
    return (
        <div>
      <h1>Count = {this.state.count}</h1>
      {/* <button onClick={() =>{this.incrementCount()}}>Click Me!</button> */}
      <br />
      <br />
      <button onClick={() => {this.incrementFive()}}>Click Me Too</button>
</div>
    )
  }
}

export default Counter;