import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Item extends Component {
  render() {
    const { title, icon, isOpened, path } = this.props;
    return (
      <NavLink activeClassName="active-item" to={path} className="link ">
        {icon}
        {isOpened && <p>{title}</p>}
      </NavLink>
    );
  }
}

export default Item;
