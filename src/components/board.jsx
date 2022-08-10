import React from "react";
import Square from "./square";
import classes from "../base.module.scss";
import PropTypes from "prop-types";

const Board = ({ squares, onClick }) => (
  <div className={classes.board}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired, 
};
