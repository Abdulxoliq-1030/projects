import React, { Component } from "react";
import { Account, Item, Search, Logo } from "./components";
import "./sidebar.scss";

export class Sidebar extends Component {
  render() {
    const { routes, isOpened } = this.props;
    return (
      <div className="sidebar">
        <div className="sidebar_assets ">
          <Logo isOpened={isOpened} />
          <Search isOpened={isOpened} />
          {routes.map(({ path, icon, title }, idx) => (
            <Item
              key={path}
              isOpened={isOpened}
              title={title}
              path={path}
              icon={icon}
            />
          ))}
        </div>
        <Account isOpened={isOpened} />
      </div>
    );
  }
}

export default Sidebar;
