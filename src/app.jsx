import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Step1, Step2, Step3 } from "./pages/index";

class App extends Component {
  state = {
    step1: {
      name: "John",
      surname: "Doe",
      email: "example@gmail.com",
      country: "USA",
      role: "JAVA",
    },
    step2: {
      brandname: "Piedpiper",
      website: "https:/ /www.piedpiper.com",
      category: "Dev Ops",
      hexcolor: "#057066",
    },
    step3: {
      beneficiary: "Grenville Angel",
      iban: "FR8417569000407717236765S51",
      swift: "12345678910",
      bankCurrency: "USD ($)",
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="container pt-4 wrapper">
          <Switch>
            <Route path="/step-1" component={(props) => <Step1 props={props} data1={this.state.step1} />} />
            <Route path="/step-2" component={(props) => <Step2 props={props} data2={this.state.step2} />} />
            <Route path="/step-3" component={(props) => <Step3 props={props} data3={this.state.step3} />} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
