// 1. დაწერეთ ფუქნცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და ორ ქოლბექ ფუქნციას. თუ პირველი რიცხვი მეტია მეორეზე, გამოიძახეთ პირველი ქოლბექი, თუარადა გამოიძახეთ მეორე ქოლბექ ფუნქცია.

/*
const compare = (num1, num2, func1, func2) => {
  //   if (num1 > num2) {
  //     return func1();
  //   } else {
  //     return func2();
  //   }

  return num1 > num2 ? func1() : func2();
};

console.log(
  compare(
    5,
    10,
    () => "First is bigger",
    () => "Second is bigger"
  )
);
*/

// 2. შექმენით ფრომისი, რომელიც დარეზოლვდება 2 წამის შემდეგ და გამოიტანს წარამტების შეტყობინებას.

/*
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});
console.log("Hello");
*/

// 3. შექმენით ფრომისი, რომელიც დაარეზოლვებს შემთხვევების 50%-ში და დანარჩენ 50%-ში დაარეჯექთებს. გაუმკლავდით ორივე ვარიანტს then და catch-ით.

/*
const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// 4. შექმენით Promise Chain (მინიმუმ 3 ფრომისით), სადაც თითოეული დარეზოლვდება 1 წამში და გამოიტანს განსხვავებულ წარმატების შეტყობინებებს.

/*
const generatePromise = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
};

generatePromise("First")
  .then((firstMessage) => {
    console.log(firstMessage);
    return generatePromise("Second");
  })
  .then((secondMessage) => {
    console.log(secondMessage);
    return generatePromise("Third");
  })
  .then((thirdMessage) => {
    console.log(thirdMessage);
  });
*/

// 5. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება დადებით რიცხვს და დაითვლის მაგ რიცხვამდე. თითოეული რიცხვი უნდა გამოკონსოლდეს 1 წამის ინტერვალით.

/*
let counter = 1;
let userNumber = 10;
const interval = setInterval(() => {
  console.log(counter);
  counter++;
  if (counter > userNumber) {
    clearInterval(interval);
  }
}, 1000);
console.log(interval);
*/

// 6. დაწერეთ პროგრამა, რომელსაც API-დან მოაქვს ორი განსხვავებული ინფორმაცია და დაბეჭდოს, როდესაც ორივეს მიიღებს.

/*
let apiLinks = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

Promise.all(apiLinks.map((link) => fetch(link)))
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data);
  });
  */

// 7. დაწერეთ პროგრამა, რომელიც API-დან წამოიღებს სამ განსხვავებულ დატას და დაბეჭდავს იმას, რომელსაც ყველაზე მალე მიიღებს.
let apiLinks = [
  "https://jsonplaceholder1.typicode.com/posts/1",
  "https://jsonplaceholder2.typicode.com/posts/1",
  "https://jsonplaceholder3.typicode.com/posts/1",
];

Promise.race(apiLinks.map((link) => fetch(link)))
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
