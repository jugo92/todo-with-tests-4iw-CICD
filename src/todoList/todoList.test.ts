import Item from "../item/item";
import User from "../user/user";
import ToDoList from "./todoList";

test('Max items', () => {
    const user = new User("john@gmail.com", "John", "Doe", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')

    const items = Array.from({ length: 10 }, (_, index) => {
        const itemName = `Item ${index + 1}`;
        return new Item(itemName, itemName, new Date(), 1);
      });    
    const todoList = new ToDoList(user, items, "Todo", null); 

    const item = new Item("Stylo", "Stylo Bleu", new Date(), 1);

    expect(() => todoList.addItem(item)).toThrow("TodoList has already 10 items."); 
  });

  test('8 items push', () => {
    const user = new User("john@gmail.com", "John", "Doe", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')

    const date = new Date();

    date.setHours(0, 0, 0, 0);
    const items = Array.from({ length: 7 }, (_, index) => {
        const itemName = `Item ${index + 1}`; 
        return new Item(itemName, itemName, new Date(), 1);
      });    const todoList = new ToDoList(user, items, "Todo", date); 

    const item = new Item("Stylo", "Stylo Bleu", new Date(), 1);
  
    todoList.sendEmailNotification = jest.fn().mockImplementation(() => {
      throw Error("Email could not be sent.");
    });

    expect(() => todoList.addItem(item)).toThrow("Email could not be sent.");
  });

  test('Bad Item', () => {
    const user = new User("john@gmail.com", "John", "Doe", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')

    const date = new Date();

    date.setHours(0, 0, 0, 0);
    const items = Array.from({ length: 7 }, (_, index) => {
        const itemName = `Item ${index + 1}`; 
        return new Item(itemName, itemName, new Date(), 1);
      });    const todoList = new ToDoList(user, items, "Todo", date); 

    const item = new Item("Stylo", "", new Date(), 1);


    expect(() => todoList.addItem(item)).toThrow("Item invalide.");
  });

  test('Time violated insert', () => {
    const user = new User("john@gmail.com", "John", "Doe", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')

    const date = new Date();

    date.setHours(0, 0, 0, 0);

    const items = Array.from({ length: 5 }, (_, index) => {
        const itemName = `Item ${index + 1}`; 
        return new Item(itemName, itemName, new Date(), 1);
      });    const todoList = new ToDoList(user, items, "Todo", new Date()); 

    const item = new Item("Stylo", "Stylo Bleu", new Date(), 1);


    expect(() => todoList.addItem(item)).toThrow("Time constraint violated.");
  });

  test('Time violated insert', () => {
    const user = new User("john@gmail.com", "John", "Doe", new Date(new Date().setFullYear(new Date().getFullYear() - 15)), '')

    const date = new Date();

    date.setHours(0, 0, 0, 0);

    const items = Array.from({ length: 5 }, (_, index) => {
        const itemName = `Item ${index + 1}`; 
        return new Item(itemName, itemName, new Date(), 1);
      });    const todoList = new ToDoList(user, items, "Todo", new Date()); 

    const item = new Item("Item 1", "Stylo Bleu", new Date(), 1);


    expect(() => todoList.addItem(item)).toThrow("Ce nom existe deja.");
  });