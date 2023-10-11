import Item from "../item/item";
import User from "../user/user";
import ToDoList from "./todoList";

test('Max items', () => {
    const item = new Item("Stylo", "", new Date(), 1);
    const user = new User("", "", "", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')
    const todoList = new ToDoList(user, [item, item, item, item, item, item, item, item, item, item], "", null);

    expect(() => todoList.addItem(item)).toThrow("TodoList has already 10 items."); 
  });