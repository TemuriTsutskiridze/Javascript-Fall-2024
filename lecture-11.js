class User {
  #creditNumber;
  constructor(name, creditNumber) {
    this.name = name;
    this.#creditNumber = creditNumber;
  }

  sayHi() {
    console.log(this.name);
  }

  get creditNumber() {
    return this.#creditNumber;
  }

  set creditNumber(newCreditNumber) {
    this.#creditNumber = newCreditNumber;
  }
}

const user = new User("Alice", "123");
console.log(user.creditNumber);

user.name = "temo";
user.creditNumber = "456";
console.log(user.creditNumber);
