class User {
  constructor(id, email, firstName, lastName, birthDate) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  isValid() {
    if (!this.email || !this.email.includes('@')) {
      return false;
    }
    console.log('good email');
    if (!this.firstName || !this.lastName) {
      return false;
    }
    console.log('good name');

    if (!this.birthDate) {
      return false;
    }
    console.log('good birthdate');
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

module.exports = User;
