import cross from "./assets/cross.png";
import not_tick from "./assets/not_tick.png";
import tick from "./Assets/tick.png";
import "./Css/TodoItem.css";
const TodoItem = ({ no, text, display, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };
  const toggle = (no) => {
    const Data = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = Data.map((item) => {
      if (item.no === no) {
        return { ...item, display: item.display === "" ? "line-through" : "" };
      }
      return item;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="todo-items">
      <div className="todo-contianer">
        <div className={`todo-text ${display}`} onClick={() => toggle(no)}>
          {display === "" ? (
            <img src={not_tick} alt="not tick" />
          ) : (
            <img src={tick} alt="tick" />
          )}
          {text}
        </div>
        <img
          onClick={() => {
            deleteTodo(no);
          }}
          className="todoitem-cross"
          src={cross}
          alt="cross"
        />
      </div>
    </div>
  );
};

export default TodoItem;
