import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  render() {
    const { value, onSlice } = this.props;
    return (
      <div className="header">
        <span onClick={onSlice}>{value}</span>
      </div>
    );
  }
}

export default Header;
