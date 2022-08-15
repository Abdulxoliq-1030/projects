import React from "react";

const Menu = ({ onSelect, collapsed, isActive, title, icon }) => {
  return (
    <div className={`menu ${isActive && "active"}`} onClick={onSelect}>
      <nav>{icon}</nav>
      {collapsed && <span>{title}</span>}
    </div>
  );
};

export default Menu;
