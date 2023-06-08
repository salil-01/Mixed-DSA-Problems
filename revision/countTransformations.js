// Count transformations Ended
// Description

// You are given positive integers A and B.

// You will repeat the following operation until A=B:

// compare A and B to perform one of the following two:

// if A>B, replace A with A−B

// if A<B, replace B with B−A.

// How many times will you repeat it until A=B?

// It is guaranteed that a finite repetition makes A=B.

// Input
// Input Format
// The first line of input data contains a single integer t — the number of test cases.

// The next t lines contain the description of the testcases.

// The first line of each test case contains two integers - A and B.

// Constraints
// 1 ≤ t ≤ 10^3

// 1 ≤ A,B ≤ 10^5

// Output
// Output Format
// For each testcase print the answer.

// Sample Input 1

// 3
// 3 8
// 12340 12340
// 1597 987
// Sample Output 1

// 4
// 0
// 15
// Hint

// First testcase
// Initially, A=3 and B=8. You repeat the operation as follows:

// A<B, so replace B with B−A=5, making A=3 and B=5.

// A<B, so replace B with B−A=2, making A=3 and B=2.

// A>B, so replace A with A−B=1, making A=1 and B=2.

// A<B, so replace B with B−A=1, making A=1 and B=1.

// Thus, you repeat it four times.
