import Form from "../components/common/form";
import * as yup from "yup";
import cls from "./step-2.module.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const data = JSON.parse(localStorage.getItem("data"));
class Step3 extends Form {
  state = {
    data: this.props.data3,
    errors: {},
  };

  schema = yup.object({
    beneficiary: yup.string().required().label("BrandName"),
    iban: yup.number().required().label("Iban"),
    swift: yup.number().required().label("Swift"),
    bankCurrency: yup.string().required().label("USD"),
  });

  doSubmit = () => {
    const { beneficiary, iban, swift, bankCurrency } = this.state.data;
    setTimeout(() => {
      toast.success(
        `Details, Beneficiary ${beneficiary} Iban ${iban} Swift ${swift} BankCurrency ${bankCurrency}`
      );
    }, 500);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={cls["name-input"]}>
          {this.renderInput("beneficiary", "Grenville Angel")}
          {this.renderInput("iban", "Iban")}
        </div>
        {this.renderInput(
          "swift",
          "Enter your SWIFT code, and other data will be load:"
        )}
        {this.renderInput("bankCurrency", "Bank currency")}
        <div className={cls.buttons}>
          <Link to={{ pathname: "/step-2" }}>{this.renderButton("Back")}</Link>
        </div>
      </form>
    );
  }
}

export default Step3;
