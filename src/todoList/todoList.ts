import Item from "../item/item";

class ToDoList {
  idUser: number;
  items: Item[];

  constructor(idUser: number, items: Item[]) {
    this.idUser = idUser;
    this.items = items;
  }

  isValid(): boolean{
    return true;
  }

  addItem = (item:Item) => {

    

    if(this.items.length === 10){
      //throw Exception length max atteinte
    }
    
    this.items.push(item);

    if(this.items.length === 8){
      //send Mail
    }
  }
}

export default ToDoList;
