import { Component } from "react";
import Table from "./components/table";
import "./base.scss";

class App extends Component {
  handleThLength = (number) => {
    const thead = [];
    for (let i = 1; i < number; i++) {
      thead.push(<th>Column {i}</th>);
    }
    return thead;
  };

  handleTableCount = (count) => {
    const table = [];
    for (let i = 0; i < count; i++) {
      table.push(
        <tr>
          <td>Edrward {i}</td>
          <td>32</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
          <td>London Park no. {i}</td>
        </tr>
      );
    }
    return table;
  };

  render() {
    return (
      <div className="wrapper">
        <Table
          onThLength={this.handleThLength}
          onTableCount={this.handleTableCount}
        />
      </div>
    );
  }
}

export default App;
