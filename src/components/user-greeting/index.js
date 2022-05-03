import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <div>
        <h1>Welcome Giddy</h1>
      </div>
    ) : (
      <div>
        <h1>Welcome Guest</h1>
      </div>
    );
    // let message = null;
    // if (this.state.isLoggedIn) {
    //   message = (
    //     <div>
    //       <h1>Welcome Giddy</h1>
    //     </div>
    //   );
    // } else {
    //   message = (
    //     <div>
    //       <h1>Welcome Guest</h1>
    //     </div>
    //   );
    // }

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome Giddy</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Welcome Guest</h1>
    //     </div>
    //   );
    // }

    // return (
    //   <div>
    //    {message}
    //   </div>
    // );
  }
}

export default UserGreeting;
