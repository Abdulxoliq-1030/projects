import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Email from "./components/email/email";
import Range2 from "./components/range-2/range-2";
import Range from "./components/range/range";
import "./base.scss";

class App extends Component {
  state = {
    inputValue: 0,
    routes: [
      { title: "Range", path: "/range" },
      { title: "Range-2", path: "/range-2" },
      { title: "Email", path: "/email" },
    ],
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue, routes } = this.state;
    return (
      <>
        <NavBar routes={routes} />
        <Route
          path="/range"
          render={(props) => (
            <Range
              props={props}
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          )}
        />
        <Route
          path="/range-2"
          render={(props) => (
            <Range2 value={inputValue} getValue={this.handleChange} />
          )}
        />
        <Route path="/email" render={(props) => <Email props={props} />} />
      </>
    );
  }
}

export default App;
