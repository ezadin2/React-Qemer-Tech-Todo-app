import { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import TodoItem from "./TodoItem";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputref = useRef(null);
 
  const addTodo = () => {
    const newTodo = inputref.current.value;
    setTodos([...todos, { no: count++, text: newTodo, display: "" }]);
    inputref.current.value = "";
     localStorage.setItem("todos-count", count);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    count = localStorage.getItem("todos-count");
    setTodos(storedTodos);
    
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    
    }, 100);
  }, [todos]);
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
        <button
          onClick={() => {
            addTodo();
          }}
          className="todo-add-btn"
        >
          Add
        </button>
      </div>
      <div className="todo-item">
        {todos.map((item,index) => (
          <TodoItem key={index} setTodos={setTodos} no={item.no} text={item.text} display={item.display} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
