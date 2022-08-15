import React from "react";

const User = ({ users, collapsed }) => {
  return users.map(({ img, email, name, icon }, idx) => (
    <div className='user' key={name}>
      <img src={img} alt='' />
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
