// function LeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(LeapYear(2000));

// function Ticket(age) {
//   if (age <= 12) {
//     return 10;
//   } else if (age >= 13 && age <= 17) {
//     return 15;
//   } else {
//     return 20;
//   }
// }

// console.log(Ticket(17));

function Clothing(temperature) {
  if (temperature > 20) {
    return "T-shirt";
  } else {
    return "Shirt";
  }
}

console.log(Clothing(5));
Shady Belhadjfunction Fibonaci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  } else {
    return Fibonaci(n - 1) + Fibonaci(n - 2);
  }
}

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
//azzt
function isPalindrome2(s) {
  function recusive(start, end) {
    if (start >= end) {
      return true;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    return recusive(start + 1, end - 1);
  }
  return recusive(0, s.length - 1);
}