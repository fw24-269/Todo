import { useContext, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { ItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(ItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddBtnClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddBtnClicked}>
        <div className="col-sm">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter to-do here"
          />
        </div>
        <div className="col-sm">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
