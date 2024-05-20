import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { ItemsContext } from "../store/todo-items-store";

function WelcomeMsg() {
  const { items } = useContext(ItemsContext);

  return (
    items.length === 0 && <p className={`${styles.msg}`}>Enjoy Your Day</p>
  );
}
export default WelcomeMsg;
