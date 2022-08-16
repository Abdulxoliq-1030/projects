import React, { Component } from "react";
import "./toggle-zone.scss";

export class ToggleZone extends Component {
  render() {
    const { onToggle, title, isOpened } = this.props;
    return (
      <div className="toggleZone">
        <button onClick={onToggle} className="btns">
          <i className={`fa-solid fa-chevron-${isOpened ? "left" : "right"}`} />
        </button>
        <h1 className="btns-title">{title}</h1>
      </div>
    );
  }
}

export default ToggleZone;
