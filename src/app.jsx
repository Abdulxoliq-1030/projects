import React, { Component } from "react";
import Header from "./components/header/header";
import Buttons from "./components/buttons/buttons";
import "./base.scss";

class App extends Component {
  state = {
    value: "",
  };

  handleButton = (btnValue) => {
    let { value } = this.state;
    switch (btnValue) {
      case "C":
        this.setState({ value: "" });
        break;
      case "=":
        if (value !== "") {
          try {
            this.setState({ value: eval(value) });
          } catch {
            this.setState({ value: "Error" });
          }
        }
        break;
      case "←":
        if (value) {
          this.setState({
            value: value.slice(0, value.length - 1),
          });
          if (value.length === 1) {
            this.setState({ value: (value = "") });
          }
        }
        break;
      default:
        this.setState({ value: (value += btnValue) });
        break;
    }
  };

  render() {
    return (
      <>
        <Header value={this.state.value} />
        <Buttons onButton={this.handleButton} />
      </>
    );
  }
}

export default App;
