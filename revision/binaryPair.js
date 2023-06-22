// Binary pair Ended
// Description

// Given a string containing only ‘0’ and ‘1’, we need to find the maximum number of sweet pairs in the string.

// A sweet pair is defined as a pair containing exactly one ‘1’ and one ‘0’. Each element in the string can only be paired with one element only. Also, the elements can be paired together only when the distance between them is not more than a given integer 'k'.

// Input
// The first line of input contains a single integer T, the number of test cases.

// The first line of each test case contains a string containing only ‘0’ and ‘1’.

// The second line of each test case contains an integer k denoting the maximum allowed distance.

// Constraints

// 1 <= T <=100

// 1 <= n <= 10^6, n is length of string

// 1 <= k <= n

// Output
// The output must contain the maximum number of sweet pairs.

// Sample Input 1

// 1
// 10010
// 2
// Sample Output 1

// 2
// Sample Input 2

// 2
// 001101
// 3
// 101001
// 3
// Sample Output 2

// 3
// 3
// Hint

// Explanation of Sample 1

// Clearly, there can be a maximum of two pairs possible. The ‘1’ at index 0 can be paired with ‘0’ at index 1 or 2 and ‘1’ at index 3 can be paired up with ‘0’ at index 2 or 4. So, there can be a maximum of 2 pairs formed.
