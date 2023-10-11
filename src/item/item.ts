class Item {
  name: string;
  content: string;
  creation_date: Date;
  idTodoList: number;

  constructor(
    name: string,
    content: string,
    creation_date: Date,
    idTodoList: number
  ) {
    this.name = name;
    this.content = content;
    this.creation_date = creation_date;
    this.idTodoList = idTodoList;
  
  }

  getName(): string {
    return this.name;
  }

}

export default Item;
