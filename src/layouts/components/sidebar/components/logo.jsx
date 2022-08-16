import React, { Component } from "react";
import { logo } from "../../../../components/icons";

class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        {logo}
        {this.props.isOpened ? <h1>MingCute</h1> : null}
      </div>
    );
  }
}

export default Logo;
