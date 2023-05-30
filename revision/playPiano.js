// Play Piano Ended
// Description

// Two sisters, A and B, play the piano every day. During the day, they can play in any order. That is, A might play first and then B, or it could be B first and then A. But each one of them plays the piano exactly once per day. They maintain a common log, in which they write their name whenever they play.

// You are given the entries of the log, but you're not sure if it has been tampered with or not. Your task is to figure out whether these entries could be valid or not.

// Input
// Input Format

// The first line of the input contains an integer T denoting the number of test cases. The description of the test cases follows.

// The first line of each test case contains a string s denoting the entries of the log.

// Constraints

// 1<=t<=10

// 2<=|s|<=100

// Output
// For each test case, output yes or no according to the answer to the problem.

// Sample Input 1

// 4
// AB
// ABBA
// ABAABB
// AA
// Sample Output 1

// yes
// yes
// no
// no
// Hint

// Testcase 1: There is only one day, and both A and B have played exactly once. So this is a valid log. Hence 'yes'.

// Testcase 2: On the first day, A has played before B, and on the second day, B has played first. Hence, this is also a valid log.

// Testcase 3: On the first day, A played before B, but on the second day, A seems to have played twice. This cannot happen, and hence this is 'no'.
function playPiano(s) {
  // Write Code Here
  // check(s)
  check(s) ? console.log("yes") : console.log("no");
}
function check(s) {
  // console.log(s)
  let j = 0;
  let i = 1;
  while (j < s.length - 1) {
    if (s[j] == s[i]) {
      return false;
    } else {
      j = j + 2;
      i = i + 2;
    }
  }
  return true;
}
