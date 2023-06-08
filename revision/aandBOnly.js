// a and b only Ended
// Description

// You are given a string S that contains 3 characters: 'a', 'b', and '?'. Your task is to convert it to a string which contains only 2 characters: 'a', 'b'. The converted string must follow following conditions:

// 1. It should not contains two letters 'a' in a row.

// 2. if there are many strings possible, the answer should be one which is the first in alphabetical order

// (Read sample test case for better understanding)

// Input
// Input Format

// The first line contains non-empty string s consisting of 'a', 'b' and '?' characters.

// Constraints

// Length of s is at most 50.

// Output
// Output Format

// Output the first in alphabetical order word

// Sample Input 1

// ?ba??b
// Sample Output 1

// ababab
// Hint

// Sample 1 Explanation

// ababab, ababbb, bbabab and bbabbb are possible. The first in alphabetical order is ababab.
function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim().split("");
  ab(str);
}
function ab(str) {
  // console.log(str)

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "?") {
      if (i == 0) {
        if (str[i + 1] !== "a") {
          str[i] = "a";
        } else {
          str[i] = "b";
        }
      } else if (i == str.length - 1) {
        if (str[i - 1] !== "a") {
          str[i] = "a";
        } else {
          str[i] = "b";
        }
      } else if (i !== 0 && i !== str.length - 1) {
        if (str[i - 1] !== "a" && str[i + 1] !== "a") {
          str[i] = "a";
        } else {
          str[i] = "b";
        }
      }
    }
  }
  console.log(str.join(""));
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
