import React, { Component } from "react";

class BusCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: 0,
    };
  }
  incrementCount(){
      this.setState({
          people: this.state.people + 1,
      },()=>{
          if ((this.state.people) > 10){
              console.log("Max reached")
          }
        console.log(this.state.people)
      })
  }
  decrementCount(){
      this.setState({
          people: this.state.people - 1
      })
  }
  render() {
    return (
      <div style={{ margin: "0 2em 0  2em" }}>
        <div
          style={{
            backgroundColor: "skyblue",
            textAlign: "center",
            padding: "2em 0 2em 0",
            color: "Black",
          }}
        >
          <h1>This is a bus counter</h1>
        </div>
        <h1>People Entered : {this.state.people}</h1>
        <br />
        <button
          style={{
            padding: "1em 1em 1em 1em",
            fontSize: "1em",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={() => this.incrementCount()}
        >
          Increment
        </button>
        <br />
        <br />
        <button
          style={{
            padding: "1em 1em 1em 1em",
            fontSize: "1em",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={()=>this.decrementCount()}
        >
          Increment
        </button>
      </div>
    );
  }
}
export default BusCounter;
