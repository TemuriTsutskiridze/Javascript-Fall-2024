// Selection Sort -> O(n^2)
/*
function selectionSort(arr) {
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([10, 22, 34, 19, 17])); // [10, 17, 19, 22, 34]
*/

// Quick Sort -> O(n log n)

/*
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, -3, 5, 2, 6, 8, -6, 1, 9]));
*/

// Luhn Algorithm

function luhnAlgorithm(creditCardNumber) {
  const creditString = creditCardNumber.toString();
  let length = creditString.length;

  if (length !== 13 && length !== 15 && length !== 16) {
    return "Invalid";
  }

  const firstDigit = parseInt(creditString[0]);
  const firstTwoDigits = parseInt(creditString.slice(0, 2));

  if (
    firstDigit !== 4 &&
    firstTwoDigits !== 34 &&
    firstTwoDigits !== 37 &&
    (firstTwoDigits < 51 || firstTwoDigits > 55)
  ) {
    return "Invalid";
  }

  let checkSum = 0;

  while (creditCardNumber > 0) {
    let digit = Math.floor((creditCardNumber % 100) / 10);
    let product = digit * 2;

    if (product >= 10) {
      product = (product % 10) + Math.floor(product / 10);
    }

    checkSum += product;

    const remainingDigit = creditCardNumber % 10;
    checkSum += remainingDigit;

    creditCardNumber = Math.floor(creditCardNumber / 100);
  }

  if (checkSum % 10 !== 0) {
    return "Invalid";
  }

  if (length === 15 && (firstTwoDigits === 34 || firstTwoDigits === 37)) {
    return "AMEX";
  } else if (length === 16 && firstTwoDigits >= 51 && firstTwoDigits <= 55) {
    return "MasterCard";
  } else if ((length === 16 || length === 13) & (firstDigit === 4)) {
    return "Visa";
  } else {
    return "Invalid";
  }
}

console.time("luhnAlgorithm");
console.log(luhnAlgorithm(4003600000000014));
console.timeEnd("luhnAlgorithm");
