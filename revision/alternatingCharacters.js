// Alternating characters Ended
// Description

// You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Input
// Input Format
// The input consists of multiple testcases.

// The first line contains an integer t - the number of testcases.

// Each of the next t lines contains a string s.

// Constraints
// 1 <= t <= 10

// 1 <= length of s <= 10^5

// Output
// Output Format
// For each testcase print the minimum number of deletions required.

// Sample Input 1

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output 1

// 3
// 4
// 0
// 0
// 4
// Hint

// Capture.PNG
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line++].trim();
    alt(str);
  }
}
function alt(str) {
  // console.log(str)
  let stack = [];
  stack.push(str[0]);
  let i = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== stack[stack.length - 1]) {
      stack.push(str[i]);
    }
  }
  console.log(str.length - stack.length);
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
