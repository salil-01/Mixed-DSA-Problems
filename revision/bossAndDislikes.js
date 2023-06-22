// Boss and his dislikes Ended
// Description

// Your boss has sent you to his kitchen to clean out stuff he doesn't like.

// There are n items on his platform shelf, and are placed in certain order and each item has auniqueindex number.

// He then mentions a list of item indexes that he doesn't like. Your task is to remove all these items and then return to him all the other items in the same given order.

// Input
// Input Format
// Each test contains multiple test cases.

// The first line contains a single integer t — the number of test cases.

// Description of the test cases follows.

// The first line of each test case contains a single integer n.

// The second line of each test case contains n integers item1,item2,…,itemn.

// The third line of each test case contains a single integer k - the number of items he dislikes.

// The fourth line of each test case contains k integers dislike1,dislike2...dislikek.

// Constraints
// 1 ≤ t ≤ 1000

// 1 ≤ k < n ≤ 10^5

// 1 ≤ item[i] ≤ n

// All item[i] are distinct

// Output
// Output Format
// For each test case, output the remaining integers (unique item indexes).

// Sample Input 1

// 3
// 4
// 4 1 3 2
// 2
// 3 1
// 9
// 5 2 9 1 8 6 4 3 7
// 3
// 5 8 9
// 5
// 3 4 5 1 2
// 2
// 2 3
// Sample Output 1

// 4 2
// 2 1 6 4 3 7
// 4 5 1
// Hint

// Test Case 1: Here A = [4, 1, 3, 2] and B = [3, 1]. The resulting array A after removing all the items which your boss dislikes is [4, 2].

// Note that here [2, 4] is an incorrect answer since the order of elements should be the same as in the original array.

// Test Case 2: Here A = [5, 2, 9, 1, 8, 6, 4, 3, 7] and B = [5, 8, 9]. The resulting array A after removing all items which your boss dislikes is [2, 1, 6, 4, 3, 7].

// Test Case 3: Here A = [3, 4, 5, 1, 2] and B = [2, 3]. The resulting array A after removing all the items which your boss dislikes is [4, 5, 1].
