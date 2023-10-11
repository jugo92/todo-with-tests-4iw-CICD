import isEmail from 'validator/lib/isEmail';

class User {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;

  constructor(
    email: string,
    firstName: string,
    lastName: string,
    birthDate: Date
  ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  getEmail(): string {
    return this.email;
  }

  isValid() {
    if (isEmail(this.email)) {
      return false;
    }
    console.log('good email');

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
