import React, { Component } from "react";
import "./buttons.scss";

const buttons = [
  ["AC", "±", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", "00", ".", "="],
];

class Buttons extends Component {
  render() {
    const { onButton } = this.props;
    return (
      <div className="buttons">
        {buttons.map((btnItems, idx) => (
          <div key={idx} className="btn-items">
            {btnItems.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => onButton(`${btn}`)}
                children={btn}
                className={`${idx === 3 && "operator"}`}
                style={{
                  background: `${idx === 3 ? "#fc9600" : "#2a2a2a"}`,
                  color: "#fff  ",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Buttons;
