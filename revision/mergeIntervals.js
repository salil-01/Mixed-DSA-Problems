// Merge Intervals Ended
// Description

// Given an array ofintervals, represented as a list ofstart and end timesfor each interval, your goal is to merge any overlapping intervals and create a new list of non-overlapping intervals that cover all of the original intervals. The resulting list should contain only the intervals that do not overlap with any others and should be sorted in ascending order by start time, with ties broken by end time.

// Input
// First Line Contains the size of the InputN

// NextNLines have two valuesstart-time , end-time

// Constraints

// 1
// 1 <= N <=
// 1
// 0
// 5
// 10
// 5

// 0
// 0 <= A[i] <=
// 1
// 0
// 8
// 10
// 8

// Output
// Output each interval[ start-time, end-time ]in sorted order and in separate Lines.

// Sample Input 1

// 3
// 1 3
// 5 6
// 2 4
// Sample Output 1

// 1 4
// 5 6
// Sample Input 2

// 2
// 1 2
// 2 5
// Sample Output 2

// 1 5
// Hint

// Testcase-1: arr =[ [1,3], [5,6], [2,4] ]
// We can merge the first and last ranges =[ 1 , 3 ] + [ 2 , 4 ] = [ 1, 4 ]
// The second range will remain as it is, the result after sorting is[ [1, 4] , [5,6] ].

// Testcase-2: arr =[ [1,2], [2,5] ]
// We can merge both ranges into one we get =[ 1 , 2 ] + [ 2 , 5 ] = [ 1, 5 ]
