import React, { Component } from "react";
import "./buttons.scss";

class Buttons extends Component {
  render() {
    const { onButton } = this.props;
    return (
      <div className="buttons">
        <div className="btn-items">
          <button className="bg-secondary" onClick={() => onButton("C")}>C</button>
          <button className="bg-secondary" onClick={() => onButton("/")}>/</button>
          <button className="bg-secondary" onClick={() => onButton("*")}>*</button>
          <button className="bg-warning text-light" onClick={() => onButton("←")}>←</button>
        </div>
        <div className="btn-items">
          <button onClick={() => onButton("7")}>7</button>
          <button onClick={() => onButton("8")}>8</button>
          <button onClick={() => onButton("9")}>9</button>
          <button className="bg-warning text-light" onClick={() => onButton("-")}>-</button>
        </div>
        <div className="btn-items">
          <button onClick={() => onButton("4")}>4</button>
          <button onClick={() => onButton("5")}>5</button>
          <button onClick={() => onButton("6")}>6</button>
          <button className="bg-warning text-light" onClick={() => onButton("+")}>+</button>
        </div>
        <div className="btn-items">
          <button onClick={() => onButton("1")}>1</button>
          <button onClick={() => onButton("2")}>2</button>
          <button onClick={() => onButton("3")}>3</button>
          <button className="bg-warning text-light" onClick={() => onButton(".")}>.</button>
        </div>
        <div className="btn-items">
          <button onClick={() => onButton("(")}>(</button>
          <button onClick={() => onButton("0")}>0</button>
          <button onClick={() => onButton(")")}>)</button>
          <button className="bg-warning text-light" onClick={() => onButton("=")} id="equal">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
