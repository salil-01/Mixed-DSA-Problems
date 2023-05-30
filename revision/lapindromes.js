// Lapindromes Ended
// Description

// Lapindrome is defined as a string which when split in the middle, gives two halves having the same characters and same frequency of each character. If there are odd number of characters in the string, we ignore the middle character and check for lapindrome. For example gaga is a lapindrome, since the two halves ga and ga have the same characters with same frequency. Also, abccab, rotor and xyzxy are a few examples of lapindromes. Note that abbaab is NOT a lapindrome. The two halves contain the same characters but their frequencies do not match.Your task is simple. Given a string, you need to tell if it is a lapindrome

// Input
// First line of input contains a single integer T,the number of test cases.

// Each test is a single line containing a string S composed of only lowercase English alphabet.

// Constraints
// 1 <= T <= 10

// 2 <= |S| <= 1000, where |S| is the length of S

// Output
// For each test case, output on a separate line: "YES" if the string is a lapindrome and "NO" if it is no

// Sample Input 1

// 6
// gaga
// abcde
// rotor
// xyzxy
// abbaab
// ababc
// Sample Output 1

// YES
// NO
// YES
// YES
// NO
// NO
function Lapindromes(S) {
  // Write Code Here
  let mid;
  if (S.length % 2 == 0) {
    mid = Math.floor(S.length / 2);
    let left = [];
    let right = [];
    for (let i = 0, j = mid; i < mid; i++, j++) {
      left.push(S[i]);
      right.push(S[j]);
    }
    // console.log(left,right)
    left = left.sort().join("");
    right = right.sort().join("");
    // console.log(left,right)
    if (left == right) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  } else {
    mid = Math.floor(S.length / 2);
    let left = [];
    let right = [];
    for (let i = 0, j = mid + 1; i < mid; i++, j++) {
      left.push(S[i]);
      right.push(S[j]);
    }
    //   console.log(left,right)
    left = left.sort().join("");
    right = right.sort().join("");
    if (left == right) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
