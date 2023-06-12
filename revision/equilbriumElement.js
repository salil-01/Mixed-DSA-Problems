// Equilibrium Element Ended
// Description

// Given an array A of N positive numbers. The task is to find the position where equilibriumfirstoccurs in the array. An equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it. Thevalid index range is from [ 1, n-2 ]because there should be at least one element on both sides.

// Input
// Input Format

// First Line has T ( Testcases) and then for every test case we have:

// The first line contains an integer N denoting the size of the array.
// Then in the following sequence are N space-separated values of the array A.
// Constraints:

// 1 <= T <= 100
// 3 <= N <= 1000
// 1 <= Ai <= 10^8

// Output
// In a new line print the position at which the elements are at equilibrium if no equilibrium point exists print -1.

// Sample Input 1

// 2
// 5
// 15 1 5 5 5
// 3
// 1 2 3
// Sample Output 1

// 1
// -1
// Hint

// Case 1: For i = 1, we have

// LEFT_SUM = 15

// RIGHT_SUM = 5 +5+5 = 15

// So, our answer is 1.

// Case 2: No such index such fulfills the requirement.

function equilibriumElement(N, arr) {
  //write code here
  // console.log(N,arr)
  let res;
  let flag = false;
  for (let i = 1; i < N - 1; i++) {
    let sum1 = 0;
    for (let j = 0; j < i; j++) {
      sum1 += arr[j];
    }
    let sum2 = 0;
    for (let k = i + 1; k < N; k++) {
      sum2 += arr[k];
    }
    // console.log(sum1,sum2)
    if (sum1 == sum2) {
      res = i;
      flag = true;
      break;
    }
  }
  flag === false ? console.log(-1) : console.log(res);
}
