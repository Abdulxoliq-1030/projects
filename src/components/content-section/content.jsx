import React from "react";

const Content = ({ menuTitle, onCollapse }) => {
  return (
    <div className='content-section'>
      <div>
        <i className='fa-solid fa-bars' onClick={onCollapse}></i>
        <h2>{menuTitle}</h2>
      </div>
    </div>
  );
};

export default Content;
