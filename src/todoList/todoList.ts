class ToDoList {

  idUser: number;
  items: Item[]; 

  constructor(idUser: number, items: Item[]) {
      this.idUser = idUser;
      this.items = items;
  }
}

export default ToDoList;