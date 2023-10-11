import Item from "../item/item";
import User from "../user/user";
import ToDoList from "./todoList";

test('Max items', () => {
    const user = new User("john@gmail.com", "John", "Doe", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')

    const items = Array.from({ length: 10 }, () => new Item("Stylo", "Stylo Vert", new Date(), 1));
    
    const todoList = new ToDoList(user, items, "Todo", null); 

    const item = new Item("Stylo", "Stylo Bleu", new Date(), 1);

    expect(() => todoList.addItem(item)).toThrow("TodoList has already 10 items."); 
  });