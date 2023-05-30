// Delete Parts Ended
// Description

// Given a string and a range L, R you need to delete the substring starting from index L and ending at index R, and finally print the updated string.

// Note:String is 0-indexed and contains only lowercase English Alphabet, there will not be a case where the string becomes empty after deletion.

// e.g.: Suppose you are given this string

// "abcd"

// L = 0 and R = 2, then the substring "abc"  will be deleted, and the final output will be "d"

// Input
// Input Format:

// First line of input contains the number N , denoting the length of the string

// Second line of input contains the string.

// Next line contain 2 integers L and R which is the substring that you need to delete.

// Constraints:

// 1<=N<=100

// 0<=L<R<N

// Output
// Output the final string after doing the delete operation on it.

// Sample Input 1

// 6
// abcdef
// 1 3
// Sample Output 1

// aef
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let str = input[1].trim();
  let [l, r] = input[2].trim().split(" ").map(Number);
  delStr(n, str, l, r);
}
function delStr(n, str, l, r) {
  let arr = [];
  for (let i = l; i <= r; i++) {
    arr.push(i);
  }
  // console.log(arr)
  // console.log(n,str,l,r)
  let res = [];
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (i == arr[j]) {
      j++;
    } else {
      res.push(str[i]);
    }
  }
  console.log(res.join(""));
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
