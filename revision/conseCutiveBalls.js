// Consecutive Balls Ended
// Description

// Sachin has N balls. Each ball has an integer not less than 2 written on it. He will insert them in a cylinder one by one. The integer written on the i-th ball is ai​ .

// The balls are made of special material. When k balls with k (k≥2) written on them line up in a row, all these k balls will disappear.

// For each i (1≤i≤N), find the number of balls after inserting the i-th ball.

// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase :

// The first line contains the number of balls, N

// The second line contains N numbers, the values written on every ball.

// Constraints

// 1<=t<=10

// 1<=N<=10^5

// 1<=A[i]<=10^5

// Output
// For each testcase, print the number of balls remaining after the current ball is inserted.

// Sample Input 1

// 1
// 5
// 3 2 3 2 2
// 8
// 3 4 4 4 4 4 4 4
// Sample Output 1

// 1 2 3 4 3
// 1 2 3 4 1 2 3 4
// Hint

// In the first testcase ,The content of the cylinder changes as follows.

// After inserting the 1-st ball, the cylinder contains the ball with 3. Number of balls in the cylinder = 1.
// After inserting the 2-nd ball, the cylinder contains 3,2 from bottom to top.Number of balls in the cylinder = 2.
// After inserting the 3-rd ball, the cylinder contains 3,2,3 from bottom to top.Number of balls in the cylinder = 3.
// After inserting the 4-th ball, the cylinder contains 3,2,3,2 from bottom to top.Number of balls in the cylinder = 4.
// After inserting the 5-th ball, the cylinder momentarily has 3,2,3,2,2 from bottom to top. The two consecutive balls with 2 disappear, and the cylinder eventually contains 3,2,3 from bottom to top.Number of balls in the cylinder = 3.
