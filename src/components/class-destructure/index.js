import React, { Component } from 'react'

class ClassDes extends Component {
  render() {
      const {name, heroName} = this.props;
      //you can also destructure states
      //const {state1, state2} = this.state;
    return (
      <div>
          <h1>Hello {name} a.k.a {heroName}</h1>
      </div>
    )
  }
}

export default ClassDes