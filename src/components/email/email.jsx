import React, { Component } from "react";
import "./email.scss";

const select1 = React.createRef();
const select2 = React.createRef();

class Email extends Component {
  state = {
    span1: "http://",
    span2: ".com",
    value: "",
    value2: "",
    select1,
    select2,
  };

  handleChange1 = (e) => {
    const { span1, span2 } = this.state;
    const email = span1 + e.target.value + span2;
    email.trim();
    this.setState({ value: email });
  };

  handleChange2 = (e) => {
    const { select1, select2 } = this.state;
    const selectValue =
      select1.current.value + e.target.value + select2.current.value;
    this.setState({ value2: selectValue });
  };

  render() {
    const { span1, span2 } = this.state;
    return (
      <form className="email-wrap">
        <div className="email">
          <span>{span1}</span>
          <input onChange={this.handleChange1} type="email" />
          <span>{span2}</span>
        </div>

        <span>{this.state.value}</span>

        <div className="email-2">
          <select ref={select1}>
            <option value="http://">http://</option>
            <option value="https://">https://</option>
          </select>
          <input onChange={this.handleChange2} type="email" />
          <select ref={select2}>
            <option value=".com">.com</option>
            <option value=".jp">.jp</option>
            <option value=".cn">.cn</option>
            <option value=".org">.org</option>
          </select>
        </div>
        <span>{this.state.value2}</span>
        <button onClick={this.handleValue}>Click</button>
      </form>
    );
  }
}

export default Email;
