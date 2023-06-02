// Binary String Cost Ended
// Description

// According to the new tax scheme, a new tax called the binary string tax was introduced!

// JJ has a binary stringSof lengthN. According to the tax scheme, for every occurrence of"10"inS, a tax ofXrupees will be charged, while for every occurrence of"01"in S, a tax of Y rupees will be charged.

// For example, ifX=5,Y=7, and S=11010, then S has 1 occurrence of 01 and 2 occurrences of 10, so the tax charged =5*2+7*1=17

// Find the total amount of the tax.

// Input
// The first line contains a single integer T - the number of test cases. Then the test cases follow.

// The first line of each test case contains three integers N, X and Y - the length of the binary string S, the tax charged on an occurrence of 01 and the tax charged on an occurrence of 10.

// The second line of each test case contains a binary string S of length N containing 0s and 1s only.

// Constraints
// 1 <= T <= 10

// 2 <= N <= 1000

// 1 <= X,Y <= 100

// Output
// For each test case, output amount of tax jj has to pay

// Sample Input 1

// 2
// 4 7 3
// 1101
// 5 3 4
// 00000
// Sample Output 1

// 10
// 0
// Hint

// Test Case 1:

// 1 occurrence of 01 and 1 of 10

// Therefore total tax =7*1+3*1=10

// Test Case 2:

// No occurrence of 01 and 10, therefore, total tax 0
function taxOnBinaryStr(str, N, X, Y) {
  // Write code here
  let count1 = 0;
  let count2 = 0;
  for (let i = 0, j = 1; i < N - 1; i++, j++) {
    if (str[i] == 0 && str[j] == 1) {
      count1++;
    }
    if (str[i] == 1 && str[j] == 0) {
      count2++;
    }
  }
  // console.log(count1,count2)
  console.log(count1 * Y + count2 * X);
}
