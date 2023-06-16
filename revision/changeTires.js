// Change Tires Ended
// Description

// You own a small bus service business and you have just received an order to replace n tires. You know that the bus fleet owns two types of buses: with two axles (these buses have4 wheels) and with three axles (these buses have6 wheels).

// You don't know how many buses of which type the bus fleet owns, so you wonder how many buses the fleet might have. You have to determine theminimumand themaximumnumber of buses that can be in the fleet if you know that the total number of wheels for all buses is n.

// Input
// Input Format

// The first line contains an integer t — the number of test cases. The following lines contain description of test cases.

// The only line of each test case contains one integer n — the total number of wheels for all buses.

// Constraints

// 1<=T<=100

// 1<=n<=10^9

// Output
// For each test case print the answer in a single line using the following format.

// Print two integers x and y (1≤x≤y) — the minimum and the maximum possible number of buses that can be in the bus fleet.

// If there is no suitable number of buses for the given n, print the number −1 as the answer.

// Sample Input 1

// 3
// 4
// 7
// 24
// Sample Output 1

// 1 1
// -1
// 4 6
// Hint

// In the first test case the total number of wheels is 4. It means that there is the only one bus with two axles in the bus fleet.

// In the second test case it's easy to show that there is no suitable number of buses with 7 wheels in total.

// In the third test case the total number of wheels is 24. The following options are possible:

// Four buses with three axles.
// Three buses with two axles and two buses with three axles.
// Six buses with two axles.
