import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onIncrement, onBack, onReset } = this.props;
    return (
      <div className="btn-wrap">
        <button onClick={onBack} className="back bg-warning text-light">
          Back
        </button>
        <button onClick={onIncrement} className="count text-light">
          Counter
        </button>
        <button onClick={onReset} className="reset-btn bg-danger text-light">
          Reset
        </button>
      </div>
    );
  }
}
export default Button;
