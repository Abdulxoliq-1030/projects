import Form from "../components/common/form";
import * as yup from "yup";

class Register extends Form {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = yup.object({
    username: yup.string().required().label("Username"),
    email: yup.string().email().required().label("Email"),
    password: yup.string().min(6).required().label("Password"),
  });

  doSubmit = () => {
    console.log("data = ", this.state.data);
  };

  render() {
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}

export default Register;
