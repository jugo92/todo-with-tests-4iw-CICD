import isEmail from 'validator/lib/isEmail';

class User {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;

  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    birthDate: string
  ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  isValid() {
    if (!this.email || isEmail(this.email)) {
      return false;
    }
    console.log('good email');

    const today = new Date();
    const birthDate = new Date(this.birthDate);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 13) {
      return false;
    }
    console.log('good age');

    return true;
  }
}
export default User;
