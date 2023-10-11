import Item from "../item/item";

class ToDoList {
  email: string;
  items: Item[];
  last_insertion : Date

  constructor(email: string, items: Item[], last_insertion: Date) {
    this.email = email;
    this.items = items;
    this.last_insertion = last_insertion;
  }

  isValid(): boolean{
    return true;
  }

  addItem = (item:Item) => {

    

    if(this.items.length === 10){
      //throw Exception length max atteinte
    }

    //Check if Date is 30min after last insertion

    
    this.items.push(item);

    if(this.items.length === 8){
      //send Mail
    }
  }
}

export default ToDoList;
