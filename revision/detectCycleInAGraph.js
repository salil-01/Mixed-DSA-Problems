// Detect Cycle In A Graph Ended
// Description

// Given a undirected graph containing N nodes and N-1 edges. Print True if the given graph is Cyclic else print False.

// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains N, the number of nodes and M, the number of edges.

// M-lines of each test case contains two space integers denoting edge between them.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 1 <= M <= N

// Output
// For each test case, print True if graph is cyclic else print False in a new line.

// Sample Input 1

// 2
// 5 4
// 2 1
// 1 3
// 1 4
// 4 5
// 5 5
// 2 1
// 1 3
// 3 2
// 1 4
// 4 5
// Sample Output 1

// False
// True
// Hint

// For the first test case, all the nodes are connected as 2->1, 1->3, 1->4, 4->5 and no cycle is forming therefore the given graph has no any cycle formed and hence answer is False.

// For the second test case, there is a cycle from 1-2-3 and hence answer is True.
