// 1. დაწერეთ პროგრამა, რომ იპოვოთ მასივში ყველა ლუწი რიცხვის ჯამი.

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function sum(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       sum += arr[i];
  //     }
  //   }

  //   return sum;

  let sum = 0;
  for (let number of arr) {
    if (number % 2 === 0) {
      sum += number;
    }
  }

  return sum;
}

console.log(sum(arr));
*/

// 2. დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

/*
let arr = [5, 3, 8, 1, 2, 4, 7, 6];

arr.sort((a, b) => a - b);

console.log(arr);
*/

// 3. დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

/*
function largest(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
*/

/*
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(largest([5, 3, 8, 1, 2, -1, 4, 7, 6]));
*/

// 4. დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

/*
function removeElement(arr, element) {
  let index = arr.indexOf(element);

  let newArr = [...arr];
  if (index !== -1) {
    newArr.splice(index, 1);
  }

  return newArr;
}
let arr = [1, 2, 3, 4, 5];
console.log(removeElement(arr, 5));

console.log("original array", arr);
*/

// 5. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

/*
function commonElements(arr1, arr2) {
  let common = [];
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr2.includes(arr1[i])) {
  //       common.push(arr1[i]);
  //     }
  //   }

  for (let number of arr1) {
    if (arr2.includes(number)) {
      common.push(number);
    }
  }

  return common;
}

console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
*/
