// 1. რიცხვების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი ახალი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ ლუწ რიცხვებს.

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEvenNumbers = (arr) => arr.filter((number) => number % 2 === 0);

console.log(filterEvenNumbers(arr));
*/

// 2.მომხმარებლების გაფილტვრა ასაკის მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით, თვისებების სახელით და ასაკის მიხედვით, გამოიყენეთ ფილტრი 18 წელზე უფროსი ასაკის მომხმარებელთა მასივის შესაქმნელად.

/*
let users = [
  { name: "Giorgi", age: 16 },
  { name: "Nino", age: 18 },
  { name: "Mari", age: 25 },
  { name: "Ana", age: 30 },
  { name: "Luka", age: 17 },
  { name: "Nika", age: 22 },
  { name: "Gio", age: 19 },
  { name: "Nana", age: 35 },
  { name: "Tornike", age: 15 },
  { name: "Tiko", age: 21 },
];

const filterUsers = (users) => users.filter((user) => user.age >= 18);

console.log(filterUsers(users));
*/

// 3. მომხმარებლის ობიექტების მასივის გათვალისწინებით, შექმენით მასივი,სადაც მხოლოდ მომხმარებლის სახელები იქნება.

/*
let users = [
  { name: "Giorgi", age: 16 },
  { name: "Nino", age: 18 },
  { name: "Mari", age: 25 },
  { name: "Ana", age: 30 },
  { name: "Luka", age: 17 },
  { name: "Nika", age: 22 },
  { name: "Gio", age: 19 },
  { name: "Nana", age: 35 },
  { name: "Tornike", age: 15 },
  { name: "Tiko", age: 21 },
];

const userNames = (users) => users.map((user) => user.name);
console.log(userNames(users));
*/

// 4. იპოვეთ რიცხვების მასივში ყველა ლუწი რიცხვის ჯამი.ვიყენებთ მაღალი დონის ფუნქციებს.
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = arr.reduce((sum, number) => {
  if (number % 2 === 0) {
    sum += number;
  }
  return sum;
}, 0);

console.log(sumOfNumbers);
*/
// 5. მომხმარებლების დალაგება სახელების მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით,დავაბრუნოთ მასივი რომელიც დალაგებული იქნება  ანბანურად მომხმარებლის სახელის მიხედვით.

/*
let users = [
  { name: "ani", age: 16 },
  { name: "zuka", age: 16 },
  { name: "Giorgi", age: 16 },
  { name: "Nino", age: 18 },
  { name: "Mari", age: 25 },
  { name: "Ana", age: 30 },
  { name: "Zuka", age: 16 },
  { name: "Luka", age: 17 },
  { name: "Nika", age: 22 },
  { name: "Gio", age: 19 },
  { name: "Nana", age: 35 },
  { name: "Tornike", age: 15 },
  { name: "Tiko", age: 21 },
];

// const sortUsers = (users) =>
//   users.sort(
//     (a, b) =>
//       a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0)
//   );
const sortUsers = (users) => users.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortUsers(users));
*/

// 6. რიცხვების მასივის გათვალისწინებით, გამოიყენეთ every, რათა შეამოწმოთ არის თუ არა ყველა რიცხვი დადებითი.

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const allPositive = numbers.every((number) => number > 0);
console.log(allPositive);
*/

// 7. რიცხვების მასივის გათვალისწინებით, გამოიყენეთ some, რათა შეამოწმოთ არის თუ არა ზოგიერთი  რიცხვი დადებითი.

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];
const somePositive = numbers.some((number) => number > 0);
console.log(somePositive);
*/

// 8. დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

/*
const sentence = "hello world";

const capitalizeWords = (sentence) =>
  sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(capitalizeWords(sentence));
*/

// 9. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

/*
let users = [
  { name: "Nika", age: 16 },
  { name: "Nino", age: 18 },
  { name: "Mari", age: 25 },
  { name: "Nika", age: 18 },
  { name: "Luka", age: 17 },
  { name: "Nika", age: 22 },
  { name: "Gio", age: 18 },
  { name: "Nana", age: 35 },
  { name: "Nika", age: 18 },
  { name: "Tiko", age: 21 },
];

const uniqueValues = (users, key) => {
  const values = users.map((user) => user[key]);
  //   const uniqueValues = values.filter(
  //     (value, index, arr) => index === arr.lastIndexOf(value)
  //   );
  const uniqueValues = [...new Set(values)];
  return uniqueValues;
};

console.log(uniqueValues(users, "name")); // ["Nika", "Nino", "Mari", "Luka", "Gio", "Nana", "Tiko"]);

// 10. დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".

const uniqueWords = (sentence) => {
  const words = sentence.split(" ");
  const arr = ["the", "a", "is"];
  const filteredWords = words.filter((word) => !arr.includes(word));
  const uniqueWords = filteredWords.filter(
    (word, index, arr) => index === arr.lastIndexOf(word)
  );
  const sortedWords = uniqueWords.sort();
  return sortedWords.join(" ");
};

console.log(
  uniqueWords(
    "the the is a a a quick brown fox jumps over the lazy dog dog dog"
  )
);
*/

// 11. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// function findCommonElements(arr1, arr2) {}

// console.log(
//   findCommonElements([1, 2, 3], [2, 3, 4], [1, 2, 3, 5], [1, 2, 3, 9], [2, 3])
// ); // [2, 3]
