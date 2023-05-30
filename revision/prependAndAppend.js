// Prepend and Append Ended
// Description

// Akhil initially had a binary string† s (possibly of length 0). He performed the following operation several (possibly zero) times:

// Add 0 to one end of the string and 1 to the other end of the string.
// For example, starting from the string 1011, you can obtain either 010111 or 110110.

// You are given Akhil's final string. What is the length of the shortest possible string he could have started with?

// † A binary string is a string (possibly the empty string) whose characters are either 0 or 1.

// Input
// Input Format

// The first line of the input contains an integer t — the number of testcases.

// The first line of each test case contains an integer n — the length of Timur's final string.

// The second line of each test case contains a string s of length n consisting of characters 0 or 1, denoting the final string.

// Constraints

// 1<=t<=10

// 1<=n<=2000

// Output
// For each test case, output a single nonnegative integer — the shortest possible length of Timur's original string. Note that Timur's original string could have been empty, in which case you should output 0.

// Sample Input 1

// 9
// 3
// 100
// 4
// 0111
// 5
// 10101
// 6
// 101010
// 7
// 1010110
// 1
// 1
// 2
// 10
// 2
// 11
// 10
// 1011011010
// Sample Output 1

// 1
// 2
// 5
// 0
// 3
// 1
// 0
// 2
// 4
// Hint

// In the first test case, the shortest possible string Timur started with is 0, and he performed the following operation: 0→100.

// In the second test case, the shortest possible string Timur started with is 11, and he performed the following operation: 11→0111.

// In the third test case, the shortest possible string Timur started with is 10101, and he didn't perform any operations.

// In the fourth test case, the shortest possible string Timur started with is the empty string (which we denote by ε), and he performed the following operations: ε→10→0101→101010.

// In the fifth test case, the shortest possible string Timur started with is 101, and he performed the following operations: 101→01011→1010110.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let str = input[line++].trim().split("").map(Number);
    short(n, str);
  }
}
function short(n, str) {
  while (str[0] !== str[str.length - 1]) {
    str.shift();
    str.pop();
  }
  console.log(str.length);
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
