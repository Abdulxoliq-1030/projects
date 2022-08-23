import Form from "../components/common/form";
import * as yup from "yup";
import cls from "./step-1.module.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const data = JSON.parse(localStorage.getItem("data"));
class Step1 extends Form {
  state = {
    data: this.props.data1,
    errors: {},
  };

  schema = yup.object({
    name: yup.string().required().label("Name"),
    surname: yup.string().required().label("Surname"),
    email: yup.string().email().required().label("Email"),
    country: yup.string().required().label("Country"),
    role: yup.string().required().label("Role"),
  });

  doSubmit = () => {
    const { name, surname, email, country, role } = this.state.data;
    localStorage.setItem("data", JSON.stringify(this.state.data));
    setTimeout(() => {
      toast.success(
        `Register, user ${name} surname ${surname} email ${email} country ${country} role ${role}`
      );
    }, 500);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={cls["name-input"]}>
          {this.renderInput("name", "Name")}
          {this.renderInput("surname", "Surname")}
        </div>
        {this.renderInput("country", "Country")}
        {this.renderInput("role", "Role")}
        {this.renderInput("email", "Email", "email")}
        <div className={cls.buttons}>
          <Link to={{ pathname: "/step-2" }}>{this.renderButton("Next")}</Link>
        </div>
      </form>
    );
  }
}

export default Step1;
