// N balanced Ended
// Description

// Let's call a sequence of brackets balanced if :

// Starts with an opening bracket

// Ends with a closing bracket

// At any point the number of closing brackets does not exceed the number of opening brackets.

// The number of opening bracket is same as the number of closing bracket.

// We call a balanced sequence of brackets n-balanced if there are n consecutive opening brackets followed by n closing brackets.

// From the string n-balanced substrings are removed and the substring to the left and right of the deleted substring is concatenated.

// You need to repeatedly remove n-balanced substrings until no more n-balanced substrings exist.


// Input
// Input Format
// The input consists of multiple testcases.

// The first line contains an integer t - the number of testcases.

// The next 2*t lines contains the description of the t testcases.

// The first line of each testcase contains a string s - the sequence of brackets.

// The second line of each testcase contains the integer n.

// Constraints
// 1 ≤ t ≤ 10^3

// 1 ≤ |s| ≤ 10^4

// 1 ≤ n ≤ 10^2


// Output
// Output Format
// For each testcase print the remaining string after performing all the removals, or -1 if the string becomes empty.


// Sample Input 1 

// 3
// ((())())()
// 2
// ((()))
// 3
// ))((
// 2
// Sample Output 1

// ()
// -1
// ))((