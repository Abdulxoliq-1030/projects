import React, { Component } from "react";
import User from "./components/user/user";
import Logo from "./components/menu-section/logo";
import Navbar from "./components/navbar-section/navbar-section";
import Menus from "./components/menu-section/menus/menus";
import Banner from "./components/banner/banner";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    activeIdx: 0,
    title: "Dashboard",
    collapsed: "collapsed",
  };

  onCollapse = () => {
    localStorage.setItem("collapsed", !this.state.collapsed);
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  };

  onSelect = (title, newActiveIdx) => {
    localStorage.setItem("activeIdx", newActiveIdx);
    this.setState({ activeIdx: newActiveIdx, title });
  };

  render() {
    const { collapsed, activeIdx, title, routes } = this.state;
    const { onCollapse, onSelect } = this;
    return (
      <div className="app">
        <div className="dashboard">
          <Logo collapsed={collapsed} />
          <Menus
            activeIdx={activeIdx}
            collapsed={collapsed}
            onSelect={onSelect}
          />
          <User collapsed={collapsed} />
        </div>
        <div className="banner">
          <Navbar onCollapse={onCollapse} />
          <Banner title={title} />
        </div>
      </div>
    );
  }
}

export default App;
