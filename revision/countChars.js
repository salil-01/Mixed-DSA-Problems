// Count Chars Ended
// Description

// You are provided a string S. Your task is to print a string which also contains the number of times that character is repeated. (Read explanation of test case for better understanding)

// Input
// Input Format :
// First and the only line contains the string S.

// Constraints :

// Length of S is always lesser than 100

// Output
// Output one string.

// Read sample test case and explanation for better understanding.

// Sample Input 1

// aaabbbbcc
// Sample Output 1

// a3b4c2
// Sample Input 2

// aabbaa
// Sample Output 2

// a2b2a2
// Hint

// Output Explanation :

// In the given string, character 'a' is repeated 3 times.=>a3

// Character 'b' is repeated 4 times =>b4

// Character 'c' is repeated 2 times =>c2

// So, you have to print "a3b4c2" (without quotes).

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let str = input[0].trim();
  countChars(str);
}
function countChars(str) {
  // console.log(str)
  let stack = [];
  stack.push(str[0]);
  let res = "";
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (stack[stack.length - 1] == str[i]) {
      count++;
    } else {
      res += stack[stack.length - 1] + count;
      count = 1;
      stack.push(str[i]);
    }
  }
  res += stack[stack.length - 1] + count;
  console.log(res);
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
