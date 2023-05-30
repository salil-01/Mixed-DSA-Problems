// Find Value Ended
// Description

// Given a string consisting of both lowercase and uppercase characters. The value of characters 'a' and 'A' is 1 and the value of other characters is equal to the value of their corresponding previous character plus 1. You have to calculate the total value of the string with the condition that if the given character is lowercase then simply add its value and if it is uppercase then add negation of its value.

// Ex - 'aAB' = 1 - 1 - 2 = -2.

// Input
// Input Format

// The first line contains integer numbers N - the length of the string.

// The second line contains the string s.

// Constraints

// 1 <= N <= 10^5

// Output
// Print the final value of the string.

// Sample Input 1

// 5
// acBDb
// Sample Output 1

// 0
// Hint

// Given string is acBDb

// Value is 1 + 3 - 2 - 4 + 2 = 0
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let str = input[1].trim();
  value(n, str);
}
function value(n, str) {
  let sum1 = 0;
  let sum2 = 0;
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == str[i]) {
      //   console.log(str[i])
      sum1 += obj[str[i]];
    } else {
      //   console.log(str[i])
      let char = str[i].toLowerCase();
      sum2 += obj[char];
    }
  }
  console.log(sum1 - sum2);
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
