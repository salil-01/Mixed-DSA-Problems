// Nobita and A Ended
// Description

// Given a string find the length of largest substring which starts at 'a' and ends at 'a' as well.

// The String contains lowercase Alphabet.

// e.g.:

// "abcdavn" , the substring starting and ending at a is : "abcda" the output will be 5

// Note: The string will contain only 2 or less a's present, so there will not be any case like this "cdababfa"

// Input
// Input Format:

// First line of input contains the number N , denoting the length of the string.

// Second line of input contains the string.

// Constraints:

// 1<=N<=100

// 0<=Number of a's present in the string <=2

// Output
// Output an integer which is the length of largest substring which starts and ends at 'a'

// Sample Input 1

// 7
// abcdavn
// Sample Output 1

// 5
// Sample Input 2

// 6
// bcgfah
// Sample Output 2

// 0
// Hint

// In Sample 2:

// "bcgfah"

// The count of a's in the string is less than 'a' , so there will not be any sub-string which starts at 'a' and ends at 'a'as well, Output will be 0

// Note:if the count of a's in the string is one then the output will be 0 as there is no sub-string which starts at 'a' and ends at 'a'

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let str = input[1].trim();
  console.log(nobita(n, str));
}
function nobita(n, str) {
  // console.log(n,str)
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let temp = [];
    for (let j = i; j < str.length; j++) {
      temp.push(str[j]);
      if (temp.length > 1) {
        if (temp[0] == "a" && temp[temp.length - 1] == "a") {
          max = Math.max(temp.length, max);
        }
      }
    }
  }
  return max;
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
