import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import ToDoList from '../todoList/todoList';

class User {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  password: string;
  todolist: ToDoList;

  constructor(
    email: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
    password: string
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  createTodolist() {
    if (this.isValid()) {
      this.todolist = new ToDoList(this, [], new Date());
    }
  }

  isValid() {
    if (!isEmail(this.email)) {
      return false;
    }
    console.log('good email');

    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.
    if (
      isEmpty(this.password) ||
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/.test(this.password) === false
    ) {
      return false;
    }

    if (isEmpty(this.firstName)) {
      return false;
    }
    console.log('good first name');

    if (isEmpty(this.lastName)) {
      return false;
    }
    console.log('good last name');

    const today = new Date();
    const age = today.getFullYear() - this.birthDate.getFullYear();
    if (age < 13) {
      return false;
    }
    console.log('good age');

    return true;
  }
}
export default User;
