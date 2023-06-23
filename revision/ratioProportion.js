// Ratio Proportion Ended
// Description

// You are given 3 numbers n, x and y. You have to tell if the first n natural numbers can be partitioned into two parts such that the ratio of sum of numbers in these partitions is equal to x : y.

// Each number should be in atleast one partition and atmost one partition.

// Input
// Input Format
// The first line contains the number of testcases t.

// Next t lines we have the description of the t testcases.

// For each testcase you are given three positive integers n, x and y.

// Constraints
// 1 <= t <=1000

// 1 <= n,x,y <= 1000

// x and y are relatively prime

// Output
// Output Format
// For each testcase if it is possible to divide the first n natural numbers then output YES followed by the two sums in increasing order of

// else output NO.

// Sample Input 1

// 3
// 3 1 2
// 3 1 1
// 3 1 3
// Sample Output 1

// YES
// 2 4
// YES
// 3 3
// NO
// Hint

// In the first testcase one of the answers could be choosing 2 in the first partition and 1 and 3 in the other so the sum ratio is 2:4 or 1:2.

// In the second testcase one of the answers could be choosing 1 and 2 in the first partition and 3 in the other so sum ratio is 3:3 or 1:1.

// In the third testcase it is not possible to partition the first 3 natural numbers in any way such that the relative sum ratio is 1:3.
