import { Component } from "react";
import Button from "./button";
import "./tasbih.scss";

class Tasbih extends Component {
  prevCount = 0;
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.prevCount = this.state.count + 1;
  };

  handleBack = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
      this.prevCount = this.state.count - 1;
    } else if (this.state.count === 0) {
      this.setState({ count: this.prevCount });
    }
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <div className="container d-flex justify-content-center align-items-center wrapper">
          <div onClick={this.handleIncrement} className="counter-wrap">
            <h1>{this.state.count}</h1>
            <h3>Counter</h3>
          </div>
          <Button
            onIncrement={this.handleIncrement}
            onBack={this.handleBack}
            onReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}

export default Tasbih;
