import React, { useState } from "react";
import { calculateWinner } from "./helper";
import Board from "./components/board";
import classes from "./base.module.scss";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const removeHistory = () => {
    setStepNumber(0);
  };

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className={classes["info-wrapper"]}>
        <h3>{winner ? "Winner: " + winner : "Current Player: " + xO}</h3>
        <button className={classes.btn} onClick={() => removeHistory()}>
          Restart
        </button>
      </div>
    </>
  );
};

export default Game;
