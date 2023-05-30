// Find matching pattern Ended
// Description

// Given a stringstrof lengthnand a patternpatof lengthm, find if there is a substring in the givenstrthat matches the patternpat.

// If you find such a substring with the same pattern, print "Yes" without quotes.

// If no such substring exists, print "No" without quotes.

// Input
// Input Format

// The first line of input containsTthe number of test cases
// For each test case the first line contains two space-separated integersnandm
// The second line of each test case contains the stringstr
// The third line of each test case contains a patternpat
// Constraints

// 1 <= n <= 1000

// 1 <= m <= n

// Output
// Output Format

// PrintYesif the pattern is present
// PrintNoif you didn't find any substring with the same pattern

// Sample Input 1

// 2
// 10 3
// abcbababaa
// bab
// 5 2
// abcde
// bab
// Sample Output 1

// Yes
// No
// Sample Input 2

// 1
// 7 2
// absdlab
// ab
// Sample Output 2

// Yes
// Hint

// Sample Input 1 :
// Test Case 1

// We found the same patternbabin the given stringabcbababaa, Hence the output isYes

// Test Case 2

// No such pattern is present, hence the output isNo
function findMatching(n, m, str, pat) {
  // write code here
  let count = 0;
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = i; j < n; j++) {
      bag += str[j];
      if (bag == pat) {
        count++;
      }
    }
  }
  if (count > 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
