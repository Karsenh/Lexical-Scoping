import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log("Clickity Clack, Don't Clack Back");
  }

  handleClick3 = () => {
    console.log("Uh-oh. You're clacking back!");
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <button onClick={this.handleClick1}>Click 1</button>
        <button style={{ marginLeft: "10px" }} onClick={this.handleClick2}>
          Click 2
        </button>
        <button style={{ marginLeft: "10px" }} onClick={this.handleClick3}>
          Click 3
        </button>
        <button style={{ marginLeft: "10px" }}>Click 4</button>
      </div>
    );
  }
}

export default App;
