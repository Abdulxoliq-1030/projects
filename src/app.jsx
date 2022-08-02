import React, { Component } from "react";
import Header from "./components/header/header";
import Buttons from "./components/buttons/buttons";
import "./base.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    value: "",
  };

  handleButton = (btnValue) => {
    let { value } = this.state;

    switch (btnValue) {
      case "AC":
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
      default:
        this.setState({ value: (value += btnValue) });
        break;
    }
  };

  handleSlice = () => {
    const { value } = this.state;
    this.setState({
      value: value.slice(0, value.length - 1),
    });
  };

  render() {
    return (
      <>
        <Header onSlice={this.handleSlice} value={this.state.value} />
        <Buttons onButton={this.handleButton} />
      </>
    );
  }
}

export default App;
