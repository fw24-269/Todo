import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import ListItems from "./Components/ListItems";
import { useReducer, useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";
import { ItemsContext } from "./store/todo-items-store";

const itemsReducer = (currItems, action) => {
  let newItems = currItems;
  if (action.type === "NEW_ITEM") {
    newItems = [
      ...currItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItems = currItems.filter(
      (deleteItem) => deleteItem.name !== action.payload.itemName
    ); 
  }
  return newItems;
};

function App() {
  const [items, dispatchitems] = useReducer(itemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchitems(newItemAction);
  };

  const deleteItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoName,
      },
    };
    dispatchitems(deleteItemAction);
  };

  // const [items, setItems] = useState([]);
  // const addNewItem = (itemName, itemDueDate) => {
  //   const newItems = [...items, { name: itemName, dueDate: itemDueDate }];
  //   setItems(newItems);
  // };
  // const deleteItem = (todoItemName) => {
  //   const newTodoItems = items.filter((item) => item.name !== todoItemName);
  //   setItems(newTodoItems);
  // };

  return (
    <>
      <ItemsContext.Provider
        value={{
          items: items,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMsg></WelcomeMsg>
          <ListItems />
        </center>
      </ItemsContext.Provider>
    </>
  );
}

export default App;
