import isEmpty from 'validator/lib/isEmpty';

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

  isValid = (): boolean => {
    if (isEmpty(this.name)) {
      return false;
    }
    if (isEmpty(this.content)) {
      return false;
    }
    if (this.content.length > 1000) {
      return false;
    }
    return true;
  };
}

export default Item;
