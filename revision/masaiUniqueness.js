// Masai Uniqueness Ended
// Description

// You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).

// If it has just unique character, output "UNIQUE"

// Else in all other cases, output "NO"

// Input
// Input Format

// First Line containst(testcases)

// NexttLines have StringS.

// Constraints
// 1 <=S.length<= 100000
// 1 <=t<= 5
// S[i] = {a-z , A-Z}

// Output
// Print one string based on S string for every testcases

// Sample Input 1

// 2
// masaI
// MasAi
// Sample Output 1

// NO
// UNIQUE

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line++].trim();
    masaiUnique(str) ? console.log("UNIQUE") : console.log("NO");
  }
}
function masaiUnique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
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
