import React from "react";
import classes from "../base.module.scss";

const Square = ({ value, onClick }) => {
  return (
    <button
      className={value ? `${classes.squares} ${value}` : `${classes.squares}`}
      onClick={onClick}
      children={value}
    />
  );
};

export default Square;
