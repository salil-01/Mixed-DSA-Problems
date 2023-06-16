// Pass The Pillow Ended
// Description

// There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite direction.

// For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.

// Given the two positive integers n and time, print the index of the person holding the pillow after time seconds.

// Input
// Input Format

// First-line contains t - number of test cases.

// First-line of each test case contains n and time

// Constraints

// 1 <= t <= 10

// 2 <= n <= 1000

// 1 <= time <= 1000

// Output
// For each test case print the required answer.

// Sample Input 1

// 2
// 4 5
// 3 2
// Sample Output 1

// 2
// 3
// Hint

// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
// Afer five seconds, the pillow is given to the 2nd person.

// Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
// Afer two seconds, the pillow is given to the 3rd person.
