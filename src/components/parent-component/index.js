import React, { Component } from "react";
import ChildComponent from "../child-component";
class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

//   greetParent() {
//     alert(`Hello ${this.state.parentName}`);
//   }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        <h1>Methods as Props</h1>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    );
  }
}

export default ParentComponent;
