/*
Longest substring with at least k repeating characters Ended
Description

Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.


Input
Input Format
The first line contains an integer n.

The second line contains the string s.

The third line contains k.

Constraints
1 <= s.length <= 10^4

s consists of only lowercase English letters.

1 <= k <= 10^5


Output
Output Format
Output the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.


Sample Input 1 

5
aaabb
3
Sample Output 1

3
Sample Input 2 

6
ababbc
2
Sample Output 2

5
Hint

First testcase
The longest substring is "aaa", as 'a' is repeated 3 times

Second testcase
The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/
function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let str = input[1].trim();
  let k = +input[2].trim();
  longestSubstringWithAtleastKRepeatingCharacters(n, str, k);
}
function longestSubstringWithAtleastKRepeatingCharacters(n, str, k) {
  // console.log(n,str,k)
  let substringsArr = [];
  for (let i = 0; i < str.length; i++) {
    let substring = "";
    for (let j = i; j < str.length; j++) {
      substring += str[j];
      //   console.log(substring);
      substringsArr.push(substring);
    }
  }
  // console.log(substringsArr)
  let max = 0;
  for (let i = 0; i < substringsArr.length; i++) {
    if (substringsArr[i].length >= k && checkFrequency(substringsArr[i], k)) {
      // console.log(substringsArr[i])
      max = Math.max(max, substringsArr[i].length);
    }
  }
  console.log(max);
}
function checkFrequency(str, k) {
  let obj = {};
  // console.log(k)
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  // console.log(obj)
  for (let key in obj) {
    if (obj[key] < k) {
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
