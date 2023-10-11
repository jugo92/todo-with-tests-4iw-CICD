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

  test('8 items push', () => {
    const user = new User("john@gmail.com", "John", "Doe", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')

    const date = new Date();

    date.setHours(0, 0, 0, 0);
    const items = Array.from({ length: 7 }, () => new Item("Stylo", "Stylo Vert", date, 1));
    const todoList = new ToDoList(user, items, "Todo", date); 

    const item = new Item("Stylo", "Stylo Bleu", new Date(), 1);
  
    todoList.sendEmailNotification = jest.fn().mockImplementation(() => {
      throw Error("Email could not be sent.");
    });

    expect(() => todoList.addItem(item)).toThrow("Email could not be sent.");
  });