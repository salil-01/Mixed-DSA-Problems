// Strings with Parenthesis Ended
// Description

// Given a string containing three types of parenthesis : (), [], {}, write a program to check whether the string contains a valid sequence of parentheses.

// Input
// Input Format

// Input contains one line which is the string with parentheses whose validity you have to check

// Constraints

// length of string <= 1000

// Output
// Output Format

// Print "balanced" (without quotes) if it has a sequence of valid parentheses, otherwise print "unbalanced" (without quotes)

// Sample Input 1

// (((((((((())))))))))
// Sample Output 1

// balanced
// Sample Input 2

// [one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]
// Sample Output 2

// balanced
function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  console.log(checkPara(str));
}
function checkPara(str) {
  let countin = 0;
  let countout = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      countin++;
    } else if (str[i] == ")" || str[i] == "]" || str[i] == "}") {
      countout++;
    }
  }
  if (countin !== countout) {
    return "unbalanced";
  } else {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
        stack.push(str[i]);
      } else if (str[i] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else if (str[i] == "]" && stack[stack.length - 1] == "[") {
        stack.pop();
      } else if (str[i] == "}" && stack[stack.length - 1] == "{") {
        stack.pop();
      }
    }
    if (stack.length == 0) {
      return "balanced";
    } else {
      return "unbalanced";
    }
  }
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
