import userImg from "../../assets/Avater.png";
import { entrench } from "../../assets/icons";
import "./user.scss";

const users = [
  {
    name: "Richard",
    email: "9394lay@gmail.com",
    img: userImg,
    icon: entrench,
  },
];

const User = ({ collapsed }) => {
  return users.map(({ img, email, name, icon }, idx) => (
    <div className="user" key={name}>
      <img src={img} alt="" />
      {collapsed && (
        <div>
          <nav>{name}</nav>
          <p>{email}</p>
        </div>
      )}
      {collapsed ? icon : ""}
    </div>
  ));
};

export default User;
