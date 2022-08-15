import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = ({onSelect,collapsed,isActive,title,icon,collapse,path,props}) => {


  const onChange = (e) => {
    props.history.push(`${path}/${e.target.value}`);
  }

  return (
    <li className={`menu ${isActive && "active"}`} onClick={onSelect}>
      <Link to={path}>
        {icon}
        {collapsed && (
          <>
            <span>{title}</span>
            {collapse && (
              <select onChange={onChange}>
                <option></option>
                <option value="items">Items</option>
                <option value="category">Category</option>
                <option value="products">Products</option>
              </select>
            )}
          </>
        )}
      </Link>
    </li>
  );
};

export default Menu;
