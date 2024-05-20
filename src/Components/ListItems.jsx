import Todoitems from "./TodoItems";
import { ItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
function ListItems() {
  const { items } = useContext(ItemsContext);
  // const { deleteItem } = useContext(ItemsContext);
  return (
    <div>
      {items.map((lists) => (
        <Todoitems
          key={lists.name}
          todoName={lists.name}
          todoDate={lists.dueDate}
          // onDeleteClick={deleteItem}
        ></Todoitems>
      ))}
    </div>
  );
}
export default ListItems;
