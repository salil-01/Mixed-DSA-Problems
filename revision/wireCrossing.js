// Wire Crossing Ended
// Description

// You're given two wires consisting on n segments each. There are some connections that will be made from wire 1 to wire 2 with the help of connecting wires.

// The connecting wires me cross as shown in the picture :660719c81039b1ce9c48c6c80d2c922157422c16.png

// You're given an array a of n elements where a[i] denotes a connection between points i and a[i] on the first wire and the second wire respectively.

// For eg : In the above image 1 is connected to 4 therefore a[1] = 4.

// You need to find out the maximum number of crossing possible for the given array if you place the wires optimally. The solution of the first image is shown in the second image.

// Input
// Input Format

// The first line contains the number of testcases,T

// For each testcase:

// The first line contains the number of segments, N

// The second line contains the values of a[i]

// Constraints

// 1<=T<=10

// 1<=N<=10^5

// 1<=a[i]<=N

// Output
// For each test case, output a single integer — the maximum number of crossings there can be if you place the wires optimally.

// Sample Input 1

// 3
// 7
// 4 1 4 6 7 7 5
// 2
// 2 1
// 1
// 1
// Sample Output 1

// 6
// 1
// 0
// Hint

// The first test case is shown in the second picture in the statement.

// In the second test case, the only wiring possible has the two wires cross, so the answer is 1.

// In the third test case, the only wiring possible has one wire, so the answer is 0.
