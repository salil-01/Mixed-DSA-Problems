// Find gap Ended
// Description

// You are given an arrayAofNnumbers.

// Determine whether there is a pair (i,j) with1≤i,j≤Nsuch thatA[i]−A[j]​=X

// Input
// Input Format
// The first line of input data contains a single integer t — the number of test cases.

// The next 2*t lines contain the description of the testcases.

// The first line of each test case contains two integers - N and X.

// The second line of each test case contains N space separated integers - A1,A2....AN.

// Constraints
// 1 ≤ t ≤ 10^2

// 1 ≤ N ≤ 500

// -10^4 ≤ Ai ≤ 10^4

// -10^4 ≤ X ≤ 10^4

// Output
// Print Yes if there is a pair (i,j) with 1≤i,j≤N such that Ai−Aj=X, and No otherwise.

// Sample Input 1

// 3
// 6 5
// 3 1 4 1 5 9
// 6 -4
// -2 -7 -1 -8 -2 -8
// 2 0
// 141421356 17320508
// Sample Output 1

// Yes
// No
// Yes
// Hint

// First testcase
// We have A6−A3=9−4=5

// Second testcase
// There is no pair (i,j) such that Ai−Aj=−4.

// Third testcase
// We have A1−A1=0.
function findGap(N, X, arr) {
  find(N, X, arr) ? console.log("Yes") : console.log("No");
}
function find(N, X, arr) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[j] - arr[i] == X) {
        return true;
      }
    }
  }
  return false;
}
