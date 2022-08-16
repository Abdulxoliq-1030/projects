import React, { Component } from "react";
import "./dashboard.scss";
import {
  analytics,
  dashboardIcon,
  inbox,
  messages,
  news,
  ordersIcons,
  schedules,
  settings,
} from "../components/icons";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import ToggleZone from "./components/toggle-zone/toggle-zone";

export class Main extends Component {
  state = {
    routes: [
      { path: "/dashboard", title: "Dashboard", icon: dashboardIcon },
      { path: "/orders", title: "Orders", icon: ordersIcons },
      { path: "/schedules", title: "Schedules", icon: schedules },
      { path: "/messages", title: "Messages", icon: messages },
      { path: "/inbox", title: "Inbox", icon: inbox },
      { path: "/analytics", title: "Analytics", icon: analytics },
      { path: "/news", title: "News", icon: news },
      { path: "/settings", title: "Settings", icon: settings },
    ],
    sidebarOpened: true,
  };

  handleToggle = () => {
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };

  render() {
    const { routes, sidebarOpened } = this.state;
    const { myRender } = this.props;
    return (
      <div className="dashboard">
        <Route
          render={() => <Sidebar routes={routes} isOpened={sidebarOpened} />}
        />
        <div className="container">
          <ToggleZone isOpened={sidebarOpened} onToggle={this.handleToggle} />
          {myRender(routes)}
        </div>
      </div>
    );
  }
}

export default Main;
