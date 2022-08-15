import React, { Component } from "react";
import Content from "./components/content-section/content";
import Menus from "./components/menu-secction/menus";
import User from "./components/menu-secction/user";
import Logo from "./components/menu-secction/logo";

import "bootstrap/dist/css/bootstrap.min.css";
import userImg from "./assets/Avater.png";
import {
  home,
  clipboard,
  massage,
  inbox,
  analytic,
  news,
  setting,
  entrence,
} from "./assets/icons";

class App extends Component {
  state = {
    activeIdx: JSON.parse(localStorage.getItem("activeIdx")) || 0,
    menus: [
      { title: "Dashboard", icon: home },
      { title: "Orders", icon: clipboard },
      { title: "Schedules", icon: inbox },
      { title: "Messages", icon: massage },
      { title: "Inbox", icon: inbox },
      { title: "Analytics", icon: analytic },
      { title: "News", icon: news },
      { title: "Settings", icon: setting },
    ],
    users: [
      {
        name: "Richard",
        email: "9394lay@gmail.com",
        img: userImg,
        icon: entrence,
      },
    ],
    menuTitle: "Dashboard",
    collapsed: JSON.parse(localStorage.getItem("collapsed")),
  };

  onCollapse = () => {
    localStorage.setItem("collapsed", !this.state.collapsed);
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }));
  };

  onSelect = (a, newActiveIdx) => {
    localStorage.setItem("activeIdx", newActiveIdx);
    this.setState({ activeIdx: newActiveIdx });
  };

  render() {
    const { menus, users, menuTitle, collapsed, activeIdx } = this.state;
    const { onCollapse, onSelect } = this;
    return (
      <div className='app'>
        <div className='dashboard'>
          <Logo collapsed={collapsed} />
          <Menus
            activeIdx={activeIdx}
            menus={menus}
            collapsed={collapsed}
            onSelect={onSelect}
          />
          <User users={users} collapsed={collapsed} />
        </div>
        <Content menuTitle={menuTitle} onCollapse={onCollapse} />
      </div>
    );
  }
}

export default App;
