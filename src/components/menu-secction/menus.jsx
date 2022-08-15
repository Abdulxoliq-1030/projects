import React from "react";
import Menu from "./menu";

const Menus = ({ menus, onSelect, collapsed, activeIdx }) => {
  return (
    <div className='menus'>
      {menus.map((menu, idx) => (
        <Menu
          isActive={activeIdx === idx}
          key={menu.title}
          collapsed={collapsed}
          onSelect={() => onSelect(menu.title, idx)}
          {...menu}
        />
      ))}
    </div>
  );
};

export default Menus;
