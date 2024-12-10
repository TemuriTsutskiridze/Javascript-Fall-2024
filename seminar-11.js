// 1. შექმენით კლასი სახელად "Person". დააგენერირეთ ობიექტი, რომელსაც ექნება "name" და "age" ფროფერთები და "sayHello" მეთოდი(ეს ყველაფერი კლასშივე უნდა გაუწეროთ). გამოაკონსოლეთ ობიექტის ფროფერთები.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     return "hi";
//   }
// }

// const person = new Person("Alice", 25);
// console.log(person.name);
// console.log(person.age);
// console.log(person.sayHello());

// 2. მემკვიდრეობითობა: შექმენით კლასი "Student", რომელიც იქნება "Person"-ის შთამომავალი. დაამატეთ ახალი "grade" ფროფერთი.

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
// }

// const student = new Student("Alice", 25, 90);
// console.log(student.grade);

// 3. სტატიკური მეთოდი: შექმენით კლასი "Calculator" სტატიკური მეთოდით, რომელიც პარამეტრად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.

// class Calculator {
//   static sum(a, b) {
//     return a + b;
//   }
// }

// console.log(Calculator.sum(5, 10));

// 4. Getter and Setter: შექმენით კლასი "Temperature" private ფორფერთით - "celsius". დაამატეთ getter და setter მეთოდები. getter მეთოდი უნდა აბრუნებდეს celsius ფროფერთის. setter მეთოდი პარამეტრად უნდა იღებდეს ფარენჰეიტს, გადაჰყავდეს ცელსიუსში და ანიჭებდეს მიღებულ მნიშვნელობას celsius ფროფერთის.

// class Temperature {
//   #celsius;
//   constructor(celsius) {
//     this.#celsius = celsius;
//   }

//   get celsius() {
//     return this.#celsius;
//   }

//   set celsius(fahrenheit) {
//     this.#celsius = ((fahrenheit - 32) * 5) / 9;
//   }
// }

// const temperature = new Temperature(25);
// console.log(temperature.celsius);
// temperature.celsius = 177;
// console.log(temperature.celsius);

/* 5.

Shopping Cart:

    - Create a Product class with properties id, name, price, and quantity. Implement a method getTotalPrice() that calculates the total price for the product (price * quantity).
    - Create a ShoppingCart class that includes an array to store products. Implement methods to add a product to the cart, remove a product by id, and calculate the total price of all products in the cart.
    - Extend the ShoppingCart class by adding a method checkout() that logs the products in the cart and the total price. Implement a method emptyCart() to clear all products from the cart. 
*/

class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

const product = new Product(1, "apple", 2, 5);
const product2 = new Product(2, "banana", 3, 10);
const product3 = new Product(3, "orange", 4, 15);
console.log(product.getTotalPrice());

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  calculateTotalPrice() {
    return this.products.reduce(
      (acc, product) => acc + product.getTotalPrice(),
      0
    );
  }

  checkout() {
    this.products.forEach((product) => {
      console.log(
        `Product: ${product.name}, Quantity: ${product.quantity} Price: ${
          product.price
        }, Total Price: ${product.getTotalPrice()}`
      );
    });
  }

  emptyCart() {
    this.products = [];
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(product);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

shoppingCart.removeProduct(2);

console.log(shoppingCart.products);
console.log(shoppingCart.calculateTotalPrice());

shoppingCart.checkout();

shoppingCart.emptyCart();

console.log(shoppingCart.products);
