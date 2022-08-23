import Form from "../components/common/form";
import * as yup from "yup";
import cls from "./step-2.module.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const data = JSON.parse(localStorage.getItem("data"));
class Step2 extends Form {
  state = {
    data: this.props.data2,
    errors: {},
  };

  schema = yup.object({
    brandname: yup.string().required().label("BrandName"),
    website: yup.string().required().label("Website"),
    category: yup.string().required().label("Category"),
    hexcolor: yup.string().required().label("Hex Color"),
  });

  doSubmit = () => {
    const { brandname, website, category, hexcolor } = this.state.data;
    setTimeout(() => {
      toast.success(
        `Details, BrandName ${brandname} website ${website} category ${category} hex-Color ${hexcolor}`
      );
    }, 500);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={cls["name-input"]}>
          {this.renderInput("brandname", "Brand name (in English)")}
          {this.renderInput("website", "Website (URL)")}
        </div>
        {this.renderInput("category", "Category")}
        {this.renderInput("hexcolor", "Brand color (HEX model)")}
        <div className={cls.buttons}>
          <Link to="/step-3">{this.renderButton("Next")}</Link>
          <Link to={{ pathname: "/step-1" }}>{this.renderButton("Back")}</Link>
        </div>
      </form>
    );
  }
}

export default Step2;
