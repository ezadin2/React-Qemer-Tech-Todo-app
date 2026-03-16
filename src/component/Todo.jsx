import { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import TodoItem from "./TodoItem";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const inputref = useRef(null);

  const addTodo = () => {
    const newTodo = inputref.current.value.trim();
    if (!newTodo) return; // prevent empty todos

    setTodos([...todos, { no: count++, text: newTodo, display: "" }]);
    inputref.current.value = "";
    localStorage.setItem("todos-count", count);
  };

  useEffect(() => {
    // ✅ Fix first-load null issue
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    count = parseInt(localStorage.getItem("todos-count") || "0", 10);
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  // ✅ Always ensure todos is an array
  const filteredTodos = (todos || []).filter((todo) => {
    if (filterType === "completed") return todo.display === "line-through";
    if (filterType === "pending") return todo.display === "";
    return true;
  });

  return (
    <div className="todo">
      <div className="todo-header">Todo List</div>

      <div className="todo-add">
        <input
          type="text"
          ref={inputref}
          className="todo-input"
          placeholder="Add a new task..."
        />
        <button onClick={addTodo} className="todo-add-btn">
          Add
        </button>

        <select
          className="todo-filter"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="todo-item">
        {filteredTodos.map((item) => (
          <TodoItem
            key={item.no}
            no={item.no}
            text={item.text}
            display={item.display}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
