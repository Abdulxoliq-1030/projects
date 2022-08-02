import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="header">
        <span>{value}</span>
      </div>
    );
  }
}

export default Header;
