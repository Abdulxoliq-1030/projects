import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = ({ onSelect, collapsed, isActive, title, icon, collapse,path }) => {
  return (
    <div className={`menu ${isActive && "active"}`} onClick={onSelect}>
      {icon}
      {collapsed && (
       <>
        <span>
          {title}
        </span>
        {collapse &&
        <select>
         <option value=""selected></option>
         <option value="items"><Link to="/items">Items</Link></option>
         <option value="category">Category</option>
         <option value="products">Products</option>
        </select>}
       </>
      )}
    </div>
  );
};

export default Menu;
