// 1. დაწერეთ ფუნქცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".

// function sayHello() {
//   console.log("Hello, World");
// }

// sayHello();

// 2. დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრად მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"

// function greet(name) {
//   if (!name) {
//     return "გამარჯობა, უცნობო";
//   }
//   return `გამარჯობა, ${name}`;
// }

// function greet(name = "უცნობო") {
//   return `გამარჯობა, ${name}`;
// }
// console.log(greet("AlgoUni"));

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ სამივე - Function Declaration, Function Expression, Arrow Function.

// function declaration

/*
function max(a, b) {
  //   if (a > b) {
  //     return a;
  //   }
  //   return b;
  //   return a > b ? a : b;
  //   return Math.max(a, b);
}
*/

// function expression
/*
const max = function (a, b) {
  return a > b ? a : b;
};
*/

// arrow function
/*
const max = (a, b) => (a > b ? a : b);
*/

// console.log(max(-15, 10));

// 4. დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს

// function sumDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     let remainder = num % 10;
//     sum += remainder;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(sumDigits(123)); // 6

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.

// 6. დაწერეთ ფუნქცია, რომელიც მომხმარებელს შეეკითხება, რომ გამოიცნოს რანდომული საიდუმლო რიცხვი 0-დან 100-მდე მანამ სანამ სწორად არ გამოიცნობს მომხმარებელი. თუ შემოყვანილი რიცხვი საიდუმლო რიცხვზე მეტია, უნდა დავუკონსოლოთ "Too High", ხოლო თუ ნაკლებია - "Too Low". გამოცნობის შემთხვევაში უნდა დავპრინტოთ "You got it!" და დავაბრუნოთ რიცხვი.

/*
const generateRandomNumber = () => Math.floor(Math.random() * 100);

function guess() {
    let randomNumber = generateRandomNumber();
    console.log(randomNumber);
    let userNumber;
    do {
        userNumber = Number(prompt("Enter the number: "));
        if (userNumber < 0 || userNumber >= 100) {
            console.log("Wrong number range");
        } else if (userNumber > randomNumber) {
            console.log("Too High, try lower")
        } else if (userNumber < randomNumber) {
            console.log("Too Low, try higher")
        } else {
            console.log(`You Got it, random number was ${randomNumber}`);
        }
    } while(userNumber !== randomNumber)
}

guess();
*/
