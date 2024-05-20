import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ItemsContext } from "../store/todo-items-store";

function Todoitems({ todoName, todoDate }) {
  const { deleteItem } = useContext(ItemsContext);
  return (
    <div className="row kg-row">
      <div className="col-sm">{todoName}</div>
      <div className="col-sm">{todoDate}</div>
      <div className="col-sm">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => deleteItem(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default Todoitems;
