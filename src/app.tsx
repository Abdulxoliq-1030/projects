import React, { FC, useState, ChangeEvent, useEffect } from "react";
import "./app.css";
import TodoTask from "./components/todo-task";
import { ITask } from "./interfaces";
import { deleteTodo, getTodos } from "./services/todos";

const App: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [_id, setId] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTitle(e.target.value);
    } else {
      setDescription(String(e.target.value));
    }
  };

  useEffect(() => {
    async function getResults() {
      const todos = (await getTodos()).data;
      setTodoList(todos);
    }
    getResults();
  }, []);

  const addTask = (): void => {
    const newTask = { title: title, description: description, _id };

    if (title !== "") {
      setTodoList([...todoList, newTask]);
    } else {
      alert("Matn kiriting...");
    }

    setTitle("");
    setDescription("");
  };

  const handleDeleteTodo = (todoID: number) => {
    const todos = todoList.filter((list) => list._id !== todoID);
    setTodoList(todos);
    deleteTodo(todoID);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description..."
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask key={key} task={task} onDeleteTodo={handleDeleteTodo} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
