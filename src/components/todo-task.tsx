import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  onDeleteTodo(todoID: number): void;
}

const TodoTask = ({ task, onDeleteTodo }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.title}</span>
        <span>{task.description}</span>
      </div>
      <button
        onClick={() => {
          onDeleteTodo(task._id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
