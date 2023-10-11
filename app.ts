import Item from "./src/item/item";
import ToDoList from "./src/todoList/todoList";

const item = new Item("test", "deux", new Date(), 1);

const todo = new ToDoList(1, []);
console.log(`Array de base : ${todo.items}`);

todo.addItem(item);
console.log("Array apres le push : ", todo.items);
